import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { getProductApi } from '@/api/products';
import { DEFAULT_PAGE_SIZE, PATH } from '@/constants';
import ProductPage from '@/pages/Products';

const productSearchSchema = z.object({
  filter: z.string().catch(''),
  page: z.number().catch(1),
  size: z.number().catch(DEFAULT_PAGE_SIZE),
  sort: z.enum(['newest', 'oldest', 'price']).catch('newest'),
});

export type ProductSearch = z.infer<typeof productSearchSchema>;

export const Route = createFileRoute(PATH.PRODUCT)({
  component: ProductPage,
  validateSearch: productSearchSchema,
  loaderDeps: ({ search: { size } }) => ({
    size,
  }),
  loader: ({ deps: { size } }) => getProductApi(size),
  // The number of milliseconds that a route's data should be considered fresh when attempting to load.
  // staleTime: Infinity,
  // Do not cache this route's data after it's unloaded
  // gcTime: 0,
  // Only reload the route when the user navigates to it or when deps change
  shouldReload: false,
});
