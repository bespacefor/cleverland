import { FC, useCallback } from 'react';

import { useLocation } from 'react-router-dom';

import { BooksCategoriesList } from './categories-list.style';

import { CategoriesListItem } from '../categories-list-item';

import { BookCategory } from 'types/enum';
import { NavMenuItemList } from 'types/types';

type CategoriesListProps = {
  list: NavMenuItemList;
};

export const CategoriesList: FC<CategoriesListProps> = ({ list }) => {
  const location = useLocation();
  const activeCategory = location.pathname.split('/')[2] as BookCategory;

  const renderItemList = useCallback(() => {
    return list?.entries.map((item) => (
      <CategoriesListItem key={item.category} item={item} $isActiveCategory={activeCategory === item.category} />
    ));
  }, [list?.entries, activeCategory]);

  return (
    <BooksCategoriesList>
      <li>
        {list?.listTitle}
        <ul>{renderItemList()}</ul>
      </li>
    </BooksCategoriesList>
  );
};
