import { FC, useCallback } from 'react';

import { Container } from './stars-rating.style';

import { StarOutline } from 'assets/icons';
import { baseTheme } from 'styles/theme';
import { TextPlaceholder } from 'types/enum';
import { keyExtractor } from 'utils/key-extractor';

type StarsRatingProps = {
  rating?: number;
  stylesClass?: string;
};

export const StarsRating: FC<StarsRatingProps> = ({ rating, stylesClass }) => {
  const renderStars = useCallback(() => {
    if (!rating) return <p>{TextPlaceholder.noRatings}</p>;

    const starFill = (index: number) =>
      index < Math.round(rating) ? baseTheme.colors.main.stars : baseTheme.colors.main.white;

    return [...Array(5)].map((_, index) => <StarOutline fill={starFill(index)} key={keyExtractor(index)} />);
  }, [rating]);

  return <Container className={stylesClass}>{renderStars()}</Container>;
};
