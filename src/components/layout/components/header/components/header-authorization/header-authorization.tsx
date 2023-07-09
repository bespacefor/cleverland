import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { HeaderAuthorizationContainer, Subtitle } from './header-authorization.style';

import { avatarPlaceholder } from 'assets/images';
import { Avatar } from 'components/avatar';
import { UserDTO } from 'types/types';

type HeaderAuthorizationProps = {
  user: UserDTO;
};

export const HeaderAuthorization: FC<HeaderAuthorizationProps> = ({ user }) => {
  const { name, avatar } = user;

  return (
    <HeaderAuthorizationContainer>
      <Subtitle>Привет, {name}!</Subtitle>
      <Link to='/'>
        <Avatar size={58} background={avatar || avatarPlaceholder} />
      </Link>
    </HeaderAuthorizationContainer>
  );
};
