import { FC, useState } from 'react';
import { Outlet, useMatch } from 'react-router-dom';

import { Footer } from './components/footer';
import { Header } from './components/header';

import { LayoutContainer, MainContentContainer, Overlay } from './layout.style';

import { Breadcrumbs } from 'components/breadcrumbs';
import { NavigationMenu } from 'components/navigation-menu';
import { MOCK_USER } from 'mocks/user.mock';
import { Wrapper } from 'styles/wrapper';
import { RouteNames } from 'types/enum';

export const Layout: FC = () => {
  const bookpathMatch = useMatch(`/${RouteNames.books}/:category/:bookId`);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const closeOverlay = () => setIsBurgerOpen(!isBurgerOpen);

  return (
    <LayoutContainer isMenuOpen={isBurgerOpen}>
      <Overlay $isVisible={isBurgerOpen} onClick={closeOverlay} />
      <Header user={MOCK_USER} isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
      {bookpathMatch && <Breadcrumbs />}
      <Wrapper>
        <MainContentContainer>
          {!bookpathMatch && <NavigationMenu isMobileMenu={false} />}
          <Outlet />
        </MainContentContainer>
      </Wrapper>
      <Footer />
    </LayoutContainer>
  );
};
