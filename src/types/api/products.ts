import { Product } from '../models/products';

import { Paging } from '.';

export type ProductsResponse = {
  products: Array<Product>;
} & Paging;
