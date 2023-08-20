import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Burger } from './components/burger';
import { HeaderAuthorization } from './components/header-authorization';
import { HeaderContainer, LeftContainer, LogoContainer, BurgerContainer, Title } from './header.style';

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
          <BurgerContainer onClick={burgerIconHandler}>
            <Burger isBurgerOpen={isBurgerOpen} />
            <NavigationMenu isBurgerMenu={true} $isMenuVisible={isBurgerOpen} setIsShowMenu={setIsBurgerOpen} />
          </BurgerContainer>
          <Title>Библиотека</Title>
        </LeftContainer>
        <HeaderAuthorization user={user} />
      </HeaderContainer>
    </Wrapper>
  );
};
