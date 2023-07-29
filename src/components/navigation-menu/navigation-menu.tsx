import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { NavigationMenuItem } from './navigation-menu-item';
import { BurgerMenuContainer, NavigationMenuContainer } from './navigation-menu.style';

import { NAVIGATION_MENU_LIST } from 'consts';
import { RouteNames } from 'types/enum';
import { NavMenuItem } from 'types/types';

type NavigationMenuProps = {
  isBurgerMenu: boolean;
  $isVisible?: boolean;
  isMenuOpen?: (value: boolean) => void;
};

export const NavigationMenu: FC<NavigationMenuProps> = ({ isBurgerMenu, $isVisible = true, isMenuOpen }) => {
  const [navMenu, setNavMenu] = useState<NavMenuItem[]>([]);
  const [activeRoute, setActiveRoute] = useState<RouteNames>(RouteNames.books);
  const [isCategoriesListOpen, setIsCategoriesListOpen] = useState<boolean>(true);

  useEffect(() => {
    setNavMenu(NAVIGATION_MENU_LIST);
  }, []);

  const onClickRoute = useCallback(
    (route: RouteNames) => {
      setActiveRoute(route);
      if (activeRoute === RouteNames.books) {
        setIsCategoriesListOpen((prev) => !prev);
      }
    },
    [activeRoute]
  );

  const renderMenu = useCallback(
    () =>
      navMenu.map((item) => (
        <NavigationMenuItem
          key={item.route}
          item={item}
          onClickRoute={onClickRoute}
          activeRoute={activeRoute}
          isCategoriesListOpen={isCategoriesListOpen}
          setIsCategoriesListOpen={setIsCategoriesListOpen}
        />
      )),
    [activeRoute, isCategoriesListOpen, navMenu, onClickRoute]
  );

  const menuClickHandler = useCallback(() => {
    if (isMenuOpen) {
      isMenuOpen(false);
    }
  }, [isMenuOpen]);

  const StyledComponent = useMemo(() => (isBurgerMenu ? BurgerMenuContainer : NavigationMenuContainer), [isBurgerMenu]);

  return (
    <StyledComponent $isVisible={$isVisible} onClick={menuClickHandler}>
      <ul>{renderMenu()}</ul>
    </StyledComponent>
  );
};
