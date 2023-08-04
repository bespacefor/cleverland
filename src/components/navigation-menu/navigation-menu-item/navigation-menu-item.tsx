import { FC, useCallback } from 'react';

import { CurrentActiveLink, NavigationMenuPoint } from './navigation-menu-item.style';

import { CategoriesList } from '../categories-list';

import { RouteNames } from 'types/enum';
import { NavMenuItem } from 'types/types';

type NavMenuItemProps = {
  item: NavMenuItem;
  onClickRoute: (route: RouteNames) => any;
  activeRoute: RouteNames;
  isCategoriesListOpen: boolean;
  setIsCategoriesListOpen: (value: boolean) => any;
};

export const NavigationMenuItem: FC<NavMenuItemProps> = ({
  item,
  onClickRoute,
  activeRoute,
  isCategoriesListOpen,
  setIsCategoriesListOpen
}) => {
  const isActive = activeRoute === item.route;
  const onClickRouteHandler = () => {
    onClickRoute(item.route);
  };

  const shouldRenderCategoriesList = item.list && isActive && activeRoute === RouteNames.books && isCategoriesListOpen;

  return (
    <NavigationMenuPoint>
      <CurrentActiveLink to={`/${item.route}`} $isActive={isActive} onClick={onClickRouteHandler}>
        {item.title}
      </CurrentActiveLink>
      {shouldRenderCategoriesList && <CategoriesList list={item.list} />}
    </NavigationMenuPoint>
  );
};
