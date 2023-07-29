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
  $isActiveCategory: boolean;
};

export const CategoriesListItem: FC<CategoriesItemProps> = ({ item, $isActiveCategory }) => (
  <CategoriesListPoint $isActive={$isActiveCategory}>
    <NavLink to={`/${RouteNames.books}/${item.category}`}>
      {item.name} <span>{item.count}</span>
    </NavLink>
  </CategoriesListPoint>
);
