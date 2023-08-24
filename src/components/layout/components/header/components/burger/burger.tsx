import { FC } from 'react';

import { BurgerContainer, BurgerButton } from './burger.style';

type BurgerProps = {
  isBurgerOpen: boolean;
};

export const Burger: FC<BurgerProps> = ({ isBurgerOpen }) => (
  <BurgerContainer>
    <BurgerButton $isBurgerOpen={isBurgerOpen} />
  </BurgerContainer>
);
