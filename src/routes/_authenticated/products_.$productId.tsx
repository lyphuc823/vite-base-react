/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { getProductApi } from '@/api/products';
import { DEFAULT_PAGE_SIZE, PATH } from '@/constants';
import ProductDetailPage from '@/pages/ProductDetail';
import { getProductDetailApi } from '@/api/productDetail';

export const Route = createFileRoute(`${PATH.PRODUCT}/$productId`)({
  component: ProductDetailPage,
  loader: async ({ params }) => {
    const { productId } = params; // Get productId from the URL parameters
    if (!productId) throw new Error('Product ID is required');
    const product = await getProductDetailApi(productId); // Fetch product details
    return { product }; // Return product details for the component
  },
});
