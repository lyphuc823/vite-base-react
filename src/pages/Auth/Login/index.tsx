/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import { useTranslation } from 'react-i18next';

import { PATH } from '@/constants';
import { useAuth } from '@/hooks/auth/useAuth';
import useLogin from '@/hooks/auth/useLogin';
import { Route } from '@/routes/login';
import {
  Link,
  useNavigate,
} from '@tanstack/react-router';

export default function LoginPage() {
  const { t } = useTranslation('labels');
  const { redirect } = Route.useSearch();
  const { mutate: login } = useLogin();
  const navigate = useNavigate();
  const { updateAuthStatus } = useAuth();

  const handleLogin = () => {
    login(
      // { username: 'kminchelle', password: '0lelplR' },
      { username: 'emilys', password: 'emilyspass' },
      // { username: 'lyphuc3', password: '123456789' },
      {
        onSuccess: () => {
          updateAuthStatus(true);
          setTimeout(() => {
            if (redirect) {
              navigate({ to: redirect });
            } else {
              navigate({ to: PATH.MAIN });
            }
          });
        },
      }
    );
  };

  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Sign in to your account
      </h1>
      <form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {t('your_email')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {t('password')}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="/"
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Forgot password?
          </a>
        </div>
        <button
          type="button"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          onClick={handleLogin}
        >
          Sign in
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet?{' '}
          <a
            href="/"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Sign up
          </a>
          <Link to={PATH.ABOUT_US}>About</Link>
        </p>
      </form>
    </>
  );
}
