import { FC } from 'react';

import { BurgerMenuContainer, BurgerButton } from './burger-menu.style';

type BurgerMenuProps = {
  isBurgerMenuOpen: boolean;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({ isBurgerMenuOpen }) => (
  <BurgerMenuContainer>
    <BurgerButton isBurgerMenuOpen={isBurgerMenuOpen} id='burger' />
  </BurgerMenuContainer>
);
