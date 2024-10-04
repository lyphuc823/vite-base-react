import { UserInfo } from '.';

export type AuthState = {
  isAuthenticated: boolean;
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
  updateAuthStatus: (isAuth: boolean) => void;
};
