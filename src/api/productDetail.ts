/* eslint-disable prettier/prettier */
import { API } from '@/constants';
import APIService from '@/lib/axios';
import { ProductDetailResponse } from '@/types/api/productDetail';

export const getProductDetailApi = (productId: string) =>
  APIService.get<ProductDetailResponse>(`${API.PRODUCTS}/${productId}`);
