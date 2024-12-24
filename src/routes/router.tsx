import { createBrowserRouter, Navigate } from 'react-router';
import App from '../App';
import { Error404 } from '../pages/Error404';
import { Page } from '../pages/Page';
import { pagesState } from '../state/pages-state';
import { ProtectedPage } from '../pages/ProtectedPage';
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Navigate to='/page/0' />,
      },
      {
        path: 'page/:link',
        element: <Page pages={pagesState.pages} />,
      },
      {
        path: 'page/protected',
        element: (
          <ProtectedRoute>
            <ProtectedPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'page/:error',
        element: <Error404 />,
      },
      {
        path: '/*',
        element: <Navigate to='/page/:error' />,
      },
    ],
  },
]);
