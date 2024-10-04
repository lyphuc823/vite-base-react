import { API } from '@/constants';
import APIService from '@/lib/axios';
import { ProductsResponse } from '@/types/api/products';

export const getProductApi = (size: number) =>
  APIService.get<ProductsResponse>(API.PRODUCTS, { params: { limit: size } });
