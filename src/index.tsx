import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SendMail from './pages/SendMail';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: '/sendMail',
        element: <SendMail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
