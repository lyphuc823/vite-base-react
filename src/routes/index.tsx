import { createFileRoute } from '@tanstack/react-router';

import { PATH } from '@/constants';
import HomePage from '@/pages/Home';

export const Route = createFileRoute(PATH.MAIN)({
  component: HomePage,
});
