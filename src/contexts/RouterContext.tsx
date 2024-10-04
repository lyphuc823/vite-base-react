import { RouterProvider as BaseRouterProvider } from '@tanstack/react-router';

import { useAuth } from '@/hooks/auth/useAuth';
import { router } from '@/lib/router';

import AuthProvider from './AuthContext';

export default function RouterProvider() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

function Router() {
  const auth = useAuth();
  return <BaseRouterProvider router={router} context={{ auth }} />;
}
