import { lazy, Suspense } from 'react';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import Loading from '@/components/Loading';
import { ENVIRONMENT } from '@/constants';
import ErrorPage from '@/pages/ErrorBoundary';
import NotFoundPage from '@/pages/NotFound';
import { AuthState } from '@/types/models';

const TanStackRouterDevtools =
  ENVIRONMENT.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthState | null;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} />
      </Suspense>
    </>
  ),
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
  pendingComponent: () => <Loading />,
});
