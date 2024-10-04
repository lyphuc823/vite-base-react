import { createLazyFileRoute } from '@tanstack/react-router';

import { PATH } from '@/constants';
import AboutUsPage from '@/pages/AboutUs';

export const Route = createLazyFileRoute(PATH.ABOUT_US)({
  component: AboutUsPage,
});
