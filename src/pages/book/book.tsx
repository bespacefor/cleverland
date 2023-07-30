import { FC, useState } from 'react';

import { BookContainer, ButtonContainer, AdditionalInfo } from './book.style';

import { BookDetails } from './components/book-details';
import { BookMainInfo } from './components/book-main-info';
import { BookRating } from './components/book-rating';

import { Comments } from './components/comments';

import { PrimaryButton } from 'components/buttons/primary-button';
import { useOnMount } from 'hooks/use-on-mount';
import { MOCK_BOOK, MOCK_COMMENTS } from 'mocks/book.mock';
import { Wrapper } from 'styles/wrapper';
import { ButtonType, TextPlaceholder } from 'types/enum';
import { CommentDTO } from 'types/types';

export const BookPage: FC = () => {
  const currentBook = MOCK_BOOK;
  const [comments, setComments] = useState<CommentDTO[]>([]);

  useOnMount(() => {
    setComments(MOCK_COMMENTS);
  });

  return (
    <Wrapper>
      <BookContainer>
        <BookMainInfo book={currentBook} />
        <AdditionalInfo>
          <BookRating rating={currentBook.rating!} />
          <BookDetails book={currentBook} />
          <Comments comments={comments} />
        </AdditionalInfo>
        <ButtonContainer>
          <PrimaryButton
            title={TextPlaceholder.addRating}
            type={ButtonType.primaryButton}
            stylesClass='buttonInBookPage'
          />
        </ButtonContainer>
      </BookContainer>
    </Wrapper>
  );
};
