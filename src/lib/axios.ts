/* eslint-disable prettier/prettier */
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';

import {
  API,
  ENVIRONMENT,
  KEY_STORAGE,
} from '@/constants';
import {
  ApiResponse,
  LoginResponse,
} from '@/types/api';
import {
  getLocalStorage,
  setLocalStorage,
} from '@/utils/helpers';

const axiosInstance = axios.create({
  baseURL: ENVIRONMENT.API_ENDPOINT,
  timeout: 20000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

let isRefreshing = false;
let refreshQueue: Array<{
  resolve: (value: string) => void;
  reject: (reason?: Error) => void;
}> = [];

const processQueue = (error: AxiosError | null, token = '') => {
  refreshQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  refreshQueue = [];
};

const handleRefreshToken = async () => {
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      refreshQueue.push({ resolve, reject });
    });
  }

  isRefreshing = true;

  try {
    // Logic to refresh the token and get a new one
    const currentRefreshToken = getLocalStorage(KEY_STORAGE.REFRESH_TOKEN);
    if (!currentRefreshToken) throw new Error('Token refresh failed');

    const result: ApiResponse<LoginResponse> = await axios.post(
      API.REFRESH_TOKEN,
      {
        refreshToken: currentRefreshToken,
      }
    );

    const dataResponse = result;
    if (!dataResponse) {
      throw new Error('Token refresh failed');
    }

    const { accessToken, refreshToken } = dataResponse;
    setLocalStorage(KEY_STORAGE.REFRESH_TOKEN, refreshToken);
    setLocalStorage(KEY_STORAGE.TOKEN, accessToken);

    isRefreshing = false;
    processQueue(null, accessToken);

    return accessToken;
  } catch (refreshError) {
    console.log('Catch refresh error', refreshError);

    isRefreshing = false;
    processQueue(refreshError as AxiosError);
    // Handle the token refresh error (e.g., log out the user)
    // You may also want to redirect the user to the login page
    return Promise.reject(refreshError);
  }
};
const httpResponseErrorHandler = async (
  error: AxiosError<unknown, unknown>,
  response?: AxiosResponse<unknown, unknown>
) => {
  const statusCode = response?.status;
  switch (statusCode) {
    case HttpStatusCode.NotFound:
    case HttpStatusCode.BadRequest:
    case HttpStatusCode.Forbidden:
      break;
    case HttpStatusCode.InternalServerError:
      break;
    case HttpStatusCode.Unauthorized:
      try {
        const newToken = await handleRefreshToken();
        // Update the original request with the new token
        const originalRequest = error.config;
        if (originalRequest) {
          originalRequest?.headers.set('Authorization', `Bearer ${newToken}`);
          // Retry the original request
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        if (refreshError instanceof AxiosError)
          // Handle token refresh error
          // You may want to redirect the user to the login page here
          return refreshError;
      }
      break;
    default:
      break;
  }
};
const httpErrorHandler = async (error: AxiosError) => {
  if (!error) {
    throw new Error('Unrecoverable error!! Error is null!');
  }
  if (
    !axios.isAxiosError(error) ||
    ['ERR_NETWORK', 'ERR_CANCELED'].includes(error.code || '')
  ) {
    return error;
  }

  const response = error?.response;
  const request = error?.request;

  if (response) {
    await httpResponseErrorHandler(error, response);
  } else if (request) {
    // The request was made but no response was received,
    // `error.request` is an instance of XMLHttpRequest in the browser
    // and an instance of http.ClientRequest in Node.js
  }

  return Promise.reject(error);
};

/**
 * Handle api before request
 */
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getLocalStorage(KEY_STORAGE.TOKEN);
    console.log('Retrieved token from localStorage:', token);
    // config.headers.set('Authorization', `Bearer ${token}`);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Handle api after return
 */
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  httpErrorHandler
);

const getMethod = <Response, D = unknown, R = ApiResponse<Response>>(
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<R> => {
  return axiosInstance.get(url, config);
};

const postMethod = <Response, Request, R = ApiResponse<Response>>(
  url: string,
  data?: Request,
  config?: AxiosRequestConfig<Request>
): Promise<R> => {
  return axiosInstance.post(url, data, config);
};

const putMethod = <Response, Request, R = ApiResponse<Response>>(
  url: string,
  data?: Request,
  config?: AxiosRequestConfig<Request>
): Promise<R> => {
  return axiosInstance.put(url, data, config);
};
const patchMethod = <Response, Request, R = ApiResponse<Response>>(
  url: string,
  data?: Request,
  config?: AxiosRequestConfig<Request>
): Promise<R> => {
  return axiosInstance.patch(url, data, config);
};

const deleteMethod = <Response, Request, R = AxiosResponse<Response>>(
  url: string,
  config?: AxiosRequestConfig<Request>
): Promise<R> => {
  return axiosInstance.delete(url, config);
};

const APIService = {
  get: getMethod,
  post: postMethod,
  put: putMethod,
  delete: deleteMethod,
  patch: patchMethod,
};

export default APIService;
