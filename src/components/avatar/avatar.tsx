import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

type AvatarProps = {
  size: string;
  background: string;
};

const AvatarContainer = styled.div<{ size: string; background: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-image: ${({ background }) => `url(${background})`};
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
`;

const Avatar: FC<AvatarProps> = ({ size, background }) => {
  return <AvatarContainer size={size} background={background} />;
};

export default Avatar;
