import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import {
  CurrentActiveLink,
  CurrentLink,
  LinkContent,
  MenuSeparator,
  NavigationMenuPoint
} from './navigation-menu-item.style';

import { CategoriesList } from '../categories-list';

import { Down, Up } from 'assets/icons';
import { RouteNames } from 'types/enum';
import { NavMenuItem } from 'types/types';

type NavMenuItemProps = {
  item: NavMenuItem;
  activeRoute: RouteNames;
  onClickRoute: (route: RouteNames, e: React.SyntheticEvent) => void;
  onClickCategory: (e: React.SyntheticEvent) => void;
  isCategoriesListOpen: boolean;
  isBurgerMenu?: boolean;
};

export const NavigationMenuItem: FC<NavMenuItemProps> = ({
  item,
  activeRoute,
  onClickRoute,
  onClickCategory,
  isCategoriesListOpen,
  isBurgerMenu = false
}) => {
  const isActive = activeRoute === item.route;
  const Arrow = useMemo(() => (isCategoriesListOpen ? Up : Down), [isCategoriesListOpen]);

  if (item.isBurgerOnly && !isBurgerMenu) return null;

  return (
    <>
      {item.route === RouteNames.profile && <MenuSeparator />}
      <NavigationMenuPoint onClick={(e: any) => onClickRoute(item.route, e)}>
        <CurrentLink>
          <CurrentActiveLink $isActive={isActive}>
            <NavLink to={`/${item.route}`}>
              <LinkContent>
                {item.title} {item.list && activeRoute === RouteNames.books && <Arrow />}
              </LinkContent>
            </NavLink>
          </CurrentActiveLink>
        </CurrentLink>
        {item.list && (
          <CategoriesList
            list={item.list}
            isListOpen={isCategoriesListOpen && activeRoute === RouteNames.books}
            onClickCategory={onClickCategory}
            isBurgerMenu={isBurgerMenu}
            activeRoute={activeRoute}
          />
        )}
      </NavigationMenuPoint>
    </>
  );
};
