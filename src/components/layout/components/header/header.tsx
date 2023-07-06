import { FC } from 'react';
import { Link } from 'react-router-dom';

import HeaderAuthorization from './components/header-authorization/header-authorization';
import { LeftContainer, HeaderContainer, LogoContainer, Title } from './header.style';

import { Logo } from '../../../../assets/icons';
import { Wrapper } from '../../../../styles/wrapper';
import { UserDTO } from '../../../../types/types';

type HeaderProps = {
  user: UserDTO;
};

const Header: FC<HeaderProps> = ({ user }) => (
  <Wrapper>
    <HeaderContainer>
      <LeftContainer>
        <Link to='/'>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Link>
        <Title>Библиотека</Title>
      </LeftContainer>
      <HeaderAuthorization user={user} />
    </HeaderContainer>
  </Wrapper>
);

export default Header;
