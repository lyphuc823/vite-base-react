import { ToastContainer } from 'react-toastify';

import RouterProvider from './contexts/RouterContext';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RouterProvider />
      <ToastContainer theme="colored" limit={3} />
    </>
  );
}

export default App;
