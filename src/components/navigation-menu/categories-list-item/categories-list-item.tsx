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

export const CategoriesListItem: FC<CategoriesItemProps> = ({
  item: { name, count = 0, category },
  $isActiveCategory
}) => (
  <CategoriesListPoint $isActive={$isActiveCategory}>
    <NavLink to={`/${RouteNames.books}/${category}`}>
      {name} <span>{count}</span>
    </NavLink>
  </CategoriesListPoint>
);
