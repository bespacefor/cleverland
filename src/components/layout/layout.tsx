import { FC } from 'react';
import { Outlet, useMatch } from 'react-router-dom';

import { Footer } from './components/footer';
import { Header } from './components/header';

import { LayoutContainer, MainContainer } from './layout.style';

import { Breadcrumbs } from 'components/breadcrumbs';
import { NavigationMenu } from 'components/navigation-menu';
import { MOCK_USER } from 'mocks/user.mock';
import { Wrapper } from 'styles/wrapper';
import { RouteNames } from 'types/enum';

export const Layout: FC = () => {
  const bookpathMatch = useMatch(`/${RouteNames.books}/:category/:bookId`);

  return (
    <LayoutContainer>
      <Header user={MOCK_USER} />
      {bookpathMatch && <Breadcrumbs />}
      <Wrapper>
        <MainContainer>
          {!bookpathMatch && <NavigationMenu isBurgerMenu={false} />}
          <Outlet />
        </MainContainer>
      </Wrapper>
      <Footer />
    </LayoutContainer>
  );
};
