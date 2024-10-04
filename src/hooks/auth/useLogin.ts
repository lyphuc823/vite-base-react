/* eslint-disable simple-import-sort/imports */
import { postLoginApi } from '@/api/auth';
import { KEY_STORAGE } from '@/constants';
import { LoginParams } from '@/types/api';
import { setLocalStorage } from '@/utils/helpers';
import { useMutation } from '@tanstack/react-query';

const useLogin = () => {
  return useMutation({
    mutationKey: ['useLogin'],
    mutationFn: async (data: LoginParams) => {
      const response = await postLoginApi(data);
      const authData = response;
      console.log('Login API Response:', authData);

      if (authData?.accessToken) {
        const { accessToken, refreshToken } = authData;
        console.log('Saving token to localStorage:', accessToken);
        setLocalStorage(KEY_STORAGE.TOKEN, accessToken);
        setLocalStorage(KEY_STORAGE.REFRESH_TOKEN, refreshToken);
        console.log('Token saved to localStorage:', accessToken);
        return authData;
      } else {
        console.log('No token found in response.');
      }
    },
  });
};

export default useLogin;
