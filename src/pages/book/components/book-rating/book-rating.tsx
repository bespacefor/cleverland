import { FC } from 'react';

import { Container } from './book-rating.style';

import { BookSectionLayout } from '../book-section-layout';

import { StarsRating } from 'components/stars-rating';
import { BookSectionTitle, TextPlaceholder } from 'types/enum';

type BookRatingProps = {
  rating: number;
};

export const BookRating: FC<BookRatingProps> = ({ rating }) => (
  <BookSectionLayout title={BookSectionTitle.rating}>
    <Container>
      {rating ? (
        <>
          <StarsRating rating={rating} stylesClass='ratingInBookPage' showEmptyStars={false} />
          <div>{rating}</div>
        </>
      ) : (
        <>
          <StarsRating rating={rating} stylesClass='ratingInBookPage' showEmptyStars={true} />
          <p>{TextPlaceholder.noRatings}</p>
        </>
      )}
    </Container>
  </BookSectionLayout>
);
