import { API } from '@/constants';
import APIService from '@/lib/axios';
import { UserResponse } from '@/types/api';

export const getUserApi = () => APIService.get<UserResponse>(API.USER);
