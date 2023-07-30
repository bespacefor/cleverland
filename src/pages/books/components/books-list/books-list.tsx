import { FC, useMemo } from 'react';

import { ListView, TilesView } from './books-list.style';

import { BookCard } from '../book-card';

import { ViewVariant } from 'types/enum';
import { BookDTO } from 'types/types';
import { keyExtractor } from 'utils/key-extractor';

type BooksListProps = {
  books: BookDTO[];
  view: ViewVariant;
};

export const BooksList: FC<BooksListProps> = ({ books, view }) => {
  const ViewContainer = useMemo(() => {
    return view === ViewVariant.tiles ? TilesView : ListView;
  }, [view]);

  return (
    <ViewContainer>
      {books.map((book: BookDTO) => (
        <BookCard key={keyExtractor(book.id)} book={book} view={view} />
      ))}
    </ViewContainer>
  );
};
