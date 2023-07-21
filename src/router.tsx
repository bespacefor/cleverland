import { RouterProvider, createHashRouter } from 'react-router-dom';

import { Layout } from 'components/layout';
import { BookPage } from 'pages/book';

import { Books } from 'pages/books';
import { Contract } from 'pages/terms-and-contract/contract';
import { Terms } from 'pages/terms-and-contract/terms';
import { RouteNames } from 'types/enum';

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
        path: `/${RouteNames.books}`,
        element: <Books />
      },
      {
        path: `/${RouteNames.books}/all}`,
        element: <Books />
      },
      {
        path: `/${RouteNames.books}/:category`,
        element: <Books />
      },
      {
        path: `/${RouteNames.books}/:category/:bookId`,
        element: <BookPage />
      },
      {
        path: `/${RouteNames.terms}`,
        element: <Terms />
      },
      {
        path: `/${RouteNames.contract}`,
        element: <Contract />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
