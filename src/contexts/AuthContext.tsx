import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { KEY_STORAGE } from '@/constants';
import { AuthState, UserInfo } from '@/types/models';
import { getLocalStorage } from '@/utils/helpers';

export const AuthContext = createContext<AuthState>({
  isAuthenticated: false,
  user: null,
  setUser: () => {},
  updateAuthStatus: () => {},
});

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!getLocalStorage(KEY_STORAGE.TOKEN)
  );

  const updateAuthStatus = (isAuth: boolean) => {
    setIsAuthenticated(isAuth);
    if (!isAuth) {
      setUser(null);
    }
  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      user,
      setUser,
      updateAuthStatus,
    }),
    [isAuthenticated, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
