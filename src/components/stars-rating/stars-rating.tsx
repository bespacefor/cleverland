import { FC, useCallback } from 'react';

import { Container } from './stars-rating.style';

import { StarOutline } from 'assets/icons';
import { baseTheme } from 'styles/theme';
import { TextPlaceholder } from 'types/enum';
import { keyExtractor } from 'utils/key-extractor';

type StarsRatingProps = {
  rating?: number;
  stylesClass?: string;
  showEmptyStars?: boolean;
};

export const StarsRating: FC<StarsRatingProps> = ({ rating, stylesClass, showEmptyStars = true }) => {
  const renderStars = useCallback(() => {
    const starFill = (index: number) => {
      if (index < Math.round(rating!)) {
        return baseTheme.colors.main.stars;
      } else {
        return baseTheme.colors.main.white;
      }
    };

    return [...Array(5)].map((_, index) => <StarOutline fill={starFill(index)} key={keyExtractor(index)} />);
  }, [rating]);

  return <Container className={stylesClass}>{renderStars()}</Container>;
};
