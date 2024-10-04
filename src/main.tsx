import React from 'react';
import ReactDOM from 'react-dom/client';

import I18nextProvider from '@/contexts/I18nextContext';
import QueryClientProvider from '@/contexts/ReactQueryContext';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider>
      <QueryClientProvider>
        <App />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>
);
