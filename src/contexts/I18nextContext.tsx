import { I18nextProvider as BaseI18nextProvider } from 'react-i18next';

import I18n from '@/lib/i18n';

export default function I18nextProvider({ children }: React.PropsWithChildren) {
  return <BaseI18nextProvider i18n={I18n}>{children}</BaseI18nextProvider>;
}
