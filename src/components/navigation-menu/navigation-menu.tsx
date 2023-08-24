import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useParams } from 'react-router-dom';

import { NavigationMenuItem } from './navigation-menu-item';
import { BurgerMenuContainer, NavigationMenuContainer } from './navigation-menu.style';

import { NAVIGATION_MENU_LIST } from 'consts';
import { useOnMount } from 'hooks/use-on-mount';
import { RouteNames } from 'types/enum';

import { keyExtractor } from 'utils/key-extractor';

type NavigationMenuProps = {
  isBurgerMenu: boolean;
  $isMenuVisible?: boolean;
  setIsSubMenuVisible?: (value: boolean) => void;
};

export const NavigationMenu: FC<NavigationMenuProps> = ({
  isBurgerMenu,
  $isMenuVisible = true,
  setIsSubMenuVisible = () => undefined
}) => {
  const [activeRoute, setActiveRoute] = useState<RouteNames>(RouteNames.books);
  const [isCategoriesListOpen, setIsCategoriesListOpen] = useState<boolean>(false);
  const params = useParams();
  const containerRef = useRef(null);

  useOnMount(() => {
    if (activeRoute === RouteNames.books) {
      setIsCategoriesListOpen(true);
    }
  });

  useEffect(() => {
    if (activeRoute === RouteNames.books) {
      setIsCategoriesListOpen(true);
    }
  }, [activeRoute]);

  useEffect(() => {
    setIsCategoriesListOpen(!params.bookId);
  }, [params.bookId]);

  const onClickRoute = useCallback(
    (route: RouteNames, e: React.SyntheticEvent) => {
      e.stopPropagation();
      setActiveRoute(route);
      if (route === RouteNames.books) {
        setIsCategoriesListOpen(!isCategoriesListOpen);
        if (isCategoriesListOpen) setIsSubMenuVisible(true);
      } else {
        setIsSubMenuVisible(false);
      }
    },
    [isCategoriesListOpen, setIsSubMenuVisible]
  );

  const onClickCategory = useCallback(
    (e: React.SyntheticEvent) => {
      e.stopPropagation();
      setIsSubMenuVisible(false);
    },
    [setIsSubMenuVisible]
  );

  const StyledComponent = useMemo(() => (isBurgerMenu ? BurgerMenuContainer : NavigationMenuContainer), [isBurgerMenu]);

  return (
    <StyledComponent ref={containerRef} $isMenuVisible={$isMenuVisible}>
      <ul>
        {NAVIGATION_MENU_LIST.map((item) => (
          <NavigationMenuItem
            key={keyExtractor(item.route)}
            item={item}
            activeRoute={activeRoute}
            onClickRoute={onClickRoute}
            onClickCategory={onClickCategory}
            isCategoriesListOpen={isCategoriesListOpen}
            isBurgerMenu={isBurgerMenu}
          />
        ))}
      </ul>
    </StyledComponent>
  );
};
