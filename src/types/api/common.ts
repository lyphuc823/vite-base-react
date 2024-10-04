// export type ApiResponse<T = null> = {
//   data: T;
//   message: string;
// };

export type ApiResponse<T = null> = T;

export type Paging = {
  total: number;
  skip: number;
  limit: number;
};
