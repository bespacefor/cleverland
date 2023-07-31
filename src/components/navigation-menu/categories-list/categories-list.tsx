import { FC } from 'react';

import { useLocation } from 'react-router-dom';

import { BooksCategoriesList } from './categories-list.style';

import { CategoriesListItem } from '../categories-list-item';

import { BookCategory } from 'types/enum';
import { NavMenuItemList } from 'types/types';
import { keyExtractor } from 'utils/key-extractor';

type CategoriesListProps = {
  list?: NavMenuItemList;
};

export const CategoriesList: FC<CategoriesListProps> = ({ list }) => {
  const location = useLocation();
  const activeCategory = location.pathname.split('/')[2] as BookCategory;

  return (
    <BooksCategoriesList>
      <li>
        {list?.listTitle}
        <ul>
          {list?.entries?.map((item) => (
            <CategoriesListItem
              key={keyExtractor(item.category)}
              item={item}
              $isActiveCategory={activeCategory === item.category}
            />
          ))}
        </ul>
      </li>
    </BooksCategoriesList>
  );
};
