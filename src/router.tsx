import { RouterProvider, createHashRouter } from 'react-router-dom';

import { Layout } from 'components/layout';
import { BookPage } from 'pages/book';
import { BooksPage } from 'pages/books';
import { ContractPage } from 'pages/terms-and-contract/contract';
import { TermsPage } from 'pages/terms-and-contract/terms';
import { RouteNames } from 'types/enum';

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <BooksPage />
      },
      {
        path: `/${RouteNames.books}`,
        element: <BooksPage />
      },
      {
        path: `/${RouteNames.books}/all}`,
        element: <BooksPage />
      },
      {
        path: `/${RouteNames.books}/:category`,
        element: <BooksPage />
      },
      {
        path: `/${RouteNames.books}/:category/:bookId`,
        element: <BookPage />
      },
      {
        path: `/${RouteNames.terms}`,
        element: <TermsPage />
      },
      {
        path: `/${RouteNames.contract}`,
        element: <ContractPage />
      }
    ]
  }
]);

export const Router = () => <RouterProvider router={router} />;
