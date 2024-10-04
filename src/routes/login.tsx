import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { PATH } from '@/constants';
import LoginPage from '@/pages/Auth/Login';

const loginSearchSchema = z.object({
  redirect: z.string().optional(),
});

export const Route = createFileRoute(PATH.LOGIN)({
  component: LoginPage,
  validateSearch: loginSearchSchema,
});
