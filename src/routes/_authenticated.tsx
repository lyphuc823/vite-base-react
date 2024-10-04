import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

import { getUserApi } from '@/api/user';
import { PATH } from '@/constants';
import MainLayout from '@/layouts/MainLayout';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ location, context }) => {
    const isAuth = context.auth?.isAuthenticated;
    if (!isAuth) {
      throw redirect({
        to: PATH.LOGIN,
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      });
    }
  },
  loader: async ({ context }) => {
    const auth = context.auth;
    if (auth?.isAuthenticated && !auth?.user) {
      const user = await getUserApi();
      if (user) {
        auth.setUser(user);
      }
    }
  },
  gcTime: 0,
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});
