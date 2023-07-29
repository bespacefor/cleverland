import { FC } from 'react';
import { NavLink } from 'react-router-dom';

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
}) => (
  <NavigationMenuPoint>
    <CurrentActiveLink onClick={() => onClickRoute(item.route)}>
      <NavLink to={`/${item.route}`} className={({ isActive }) => (isActive ? 'active mainLink' : 'mainLink')}>
        {item.title}
      </NavLink>
    </CurrentActiveLink>
    {item.list && activeRoute === RouteNames.books && isCategoriesListOpen && <CategoriesList list={item.list} />}
  </NavigationMenuPoint>
);
