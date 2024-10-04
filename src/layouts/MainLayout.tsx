import { PropsWithChildren } from 'react';

import PageHeader from './Header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
}
