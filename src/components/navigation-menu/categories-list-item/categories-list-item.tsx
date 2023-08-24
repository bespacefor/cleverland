import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { CategoriesListPoint } from './categories-list-item.style';

import { BookCategory, RouteNames } from 'types/enum';

type CategoriesItemProps = {
  item: {
    name: string;
    count: number;
    category: BookCategory;
  };
  onClickCategory: (e: React.SyntheticEvent) => void;
  activeRoute: RouteNames;
  $isActiveCategory: boolean;
};

export const CategoriesListItem: FC<CategoriesItemProps> = ({
  item: { name, count = 0, category },
  onClickCategory,
  activeRoute,
  $isActiveCategory
}) => (
  <CategoriesListPoint onClick={(e: any) => onClickCategory(e)} $isActive={$isActiveCategory}>
    <NavLink to={`/${RouteNames.books}/${category}`}>
      {name} <span>{count}</span>
    </NavLink>
  </CategoriesListPoint>
);
