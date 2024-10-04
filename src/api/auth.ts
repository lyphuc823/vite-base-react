/* eslint-disable prettier/prettier */
import { API } from '@/constants/api';
import APIService from '@/lib/axios';
import {
  LoginParams,
  LoginResponse,
} from '@/types/api';

export const postLoginApi = (data: LoginParams) =>
  APIService.post<LoginResponse, LoginParams>(API.LOGIN, data);

