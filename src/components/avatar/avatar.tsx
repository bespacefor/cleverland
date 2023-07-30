import React from 'react';
import { FC } from 'react';

import { AvatarContainer } from './avatar.style';

type AvatarProps = {
  size: number;
  background: string;
};

export const Avatar: FC<AvatarProps> = ({ size, background }) => (
  <AvatarContainer size={size} $background={background} />
);
