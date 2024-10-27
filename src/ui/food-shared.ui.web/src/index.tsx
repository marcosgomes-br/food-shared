import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import OfferPage from './pages/OfferPage';
import { verifyToken } from './services/auth';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/offer",
    element: <OfferPage />,
    loader: () => {
      if(!verifyToken()){
        throw redirect('/sign-in');
      }
      return null;
    }
  },
  {
    path: "/sign-in",
    element: <SignInPage />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>
);
