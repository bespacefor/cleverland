import { FC } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import { BooksCategoriesList } from './categories-list.style';

import { CategoriesListItem } from '../categories-list-item';

import { BookCategory, RouteNames } from 'types/enum';
import { NavMenuItemList } from 'types/types';

type CategoriesListProps = {
  list?: NavMenuItemList;
  isListOpen: boolean;
  onClickCategory: (e: React.SyntheticEvent) => void;
  isBurgerMenu: boolean;
  activeRoute: RouteNames;
};

export const CategoriesList: FC<CategoriesListProps> = ({
  list,
  isListOpen,
  onClickCategory,
  isBurgerMenu,
  activeRoute
}) => {
  const { pathname } = useLocation();
  const activeCategory = pathname.split('/')[2] as BookCategory;
  const isActiveAllBooks = pathname === '/' || pathname === `/${RouteNames.books}`;

  return (
    <BooksCategoriesList $isListOpen={isListOpen}>
      <li>
        <NavLink
          to={`/${RouteNames.books}/${RouteNames.booksAll}`}
          className={isActiveAllBooks ? 'active' : ''}
          onClick={onClickCategory}
        >
          <span>{list?.listTitle}</span>
        </NavLink>
        <ul>
          {list?.entries?.map((entry) => (
            <CategoriesListItem
              key={entry.category}
              item={entry}
              $isActiveCategory={activeCategory === entry.category}
              onClickCategory={onClickCategory}
              activeRoute={activeRoute}
            />
          ))}
        </ul>
      </li>
    </BooksCategoriesList>
  );
};
