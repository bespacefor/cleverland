import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { HeaderAuthorizationContainer, Subtitle } from './header-authorization.style';

import { avatarPlaceholder } from '../../../../../../assets/images';
import { UserDTO } from '../../../../../../types/types';
import Avatar from '../../../../../avatar/avatar';

interface HeaderAuthorizationProps {
  user: UserDTO;
}

const HeaderAuthorization: FC<HeaderAuthorizationProps> = ({ user }) => {
  const { name, avatar } = user;

  return (
    <HeaderAuthorizationContainer>
      <Subtitle>Привет, {name}!</Subtitle>
      <Link to='/'>
        <Avatar size={'58px'} background={avatar || avatarPlaceholder} />
      </Link>
    </HeaderAuthorizationContainer>
  );
};

export default HeaderAuthorization;
