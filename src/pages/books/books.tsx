import { FC, useCallback, useState } from 'react';

import { BooksContainer, ContentContainer } from './books.style';
import { getBooksList } from './books.utils';
import { BooksList } from './components/books-list';

import { FilterList } from './components/filter-list';

import { useOnMount } from 'hooks/use-on-mount';

import { ViewVariant } from 'types/enum';
import { BookDTO } from 'types/types';

export const Books: FC = () => {
  const [booksList, setBooksList] = useState<BookDTO[]>([]);
  const [activeView, setActiveView] = useState<ViewVariant>(ViewVariant.tiles);
  const [loading, setLoading] = useState(true);

  const fetchBooksList = useCallback(async () => {
    try {
      const books = await getBooksList();
      setBooksList(books);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching books:', error);
      setLoading(false);
    }
  }, []);

  useOnMount(() => {
    fetchBooksList();
  });

  const activeViewHandler = useCallback((type: ViewVariant) => {
    setActiveView(type);
  }, []);

  return (
    <ContentContainer>
      <BooksContainer>
        <FilterList typeView={activeView} onToggleView={activeViewHandler} />
        {loading ? <p>Loading...</p> : <BooksList books={booksList} view={activeView} />}
      </BooksContainer>
    </ContentContainer>
  );
};
