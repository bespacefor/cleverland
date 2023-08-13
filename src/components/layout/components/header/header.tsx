import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { BurgerMenu } from './components/burger-menu';
import { HeaderAuthorization } from './components/header-authorization';
import { HeaderContainer, LeftContainer, LogoContainer, BurgerMenuContainer, Title } from './header.style';

import { Logo } from 'assets/icons';
import { NavigationMenu } from 'components/navigation-menu';
import { Wrapper } from 'styles/wrapper';
import { UserDTO } from 'types/types';

type HeaderProps = {
  user: UserDTO;
  isBurgerOpen: boolean;
  setIsBurgerOpen: (value: boolean) => void;
};

export const Header: FC<HeaderProps> = ({ user, isBurgerOpen, setIsBurgerOpen }) => {
  const burgerIconHandler = useCallback(() => {
    setIsBurgerOpen(!isBurgerOpen);
  }, [isBurgerOpen, setIsBurgerOpen]);

  return (
    <Wrapper>
      <HeaderContainer>
        <LeftContainer>
          <Link to='/'>
            <LogoContainer>
              <Logo />
            </LogoContainer>
          </Link>
          <BurgerMenuContainer onClick={burgerIconHandler}>
            <BurgerMenu isBurgerMenuOpen={isBurgerOpen} />
            <NavigationMenu isMobileMenu={true} $isVisible={isBurgerOpen} setIsShowMenu={setIsBurgerOpen} />
          </BurgerMenuContainer>
          <Title>Библиотека</Title>
        </LeftContainer>
        <HeaderAuthorization user={user} />
      </HeaderContainer>
    </Wrapper>
  );
};
