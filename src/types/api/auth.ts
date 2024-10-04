export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type LoginParams = {
  username: string;
  password: string;
};
