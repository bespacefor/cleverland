import { RouterProvider, createHashRouter } from 'react-router-dom';

import { Layout } from 'components/layout';
import { BookPage } from 'pages/book';
import { Books } from 'pages/main';
import { Contract } from 'pages/terms-and-contract/contract';
import { Terms } from 'pages/terms-and-contract/terms';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Books />
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/books/all',
        element: <Books />
      },
      {
        path: '/books/:category',
        element: <Books />
      },
      {
        path: '/books/:category/:bookId',
        element: <BookPage />
      },
      {
        path: '/terms',
        element: <Terms />
      },
      {
        path: '/contract',
        element: <Contract />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
