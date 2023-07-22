import React, { FC, useCallback } from 'react';

import { Container } from './book-rating.style';

import { StarOutline } from 'assets/icons';
import { baseTheme } from 'styles/theme';
import { TextPlaceholder } from 'types/enum';
import { keyExtractor } from 'utils/key-extractor';

type BookRatingProps = {
  rating?: number;
  stylesClass?: string;
};

export const BookRating: FC<BookRatingProps> = ({ rating, stylesClass }) => {
  const renderStars = useCallback(() => {
    if (!rating) return <p>{TextPlaceholder.noRatings}</p>;

    const starFill = (index: number) =>
      index < Math.round(rating) ? baseTheme.colors.main.stars : baseTheme.colors.main.white;

    return [...Array(5)].map((_, index) => <StarOutline fill={starFill(index)} key={keyExtractor(index)} />);
  }, [rating]);

  return <Container className={stylesClass}>{renderStars()}</Container>;
};
