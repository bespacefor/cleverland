import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { getStyledComponentForBookCard } from './book-card.utils';
import { ListAbout, ListBookInfo, ListButtonContainer } from './list-card.style';
import { TileAbout, TileBookInfo, TileButtonContainer } from './tile-card.styles';

import { CoverPlaceholder } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { StarsRating } from 'components/stars-rating';
import { RouteNames, StarsRatingVariant, TextPlaceholder, ViewVariant } from 'types/enum';
import { BookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';

type BookProps = {
  book: BookDTO;
  view: ViewVariant;
};

export const BookCard: FC<BookProps> = ({
  book: { category, id, image, title, author, isBooked, bookedTill, rating },
  view
}) => {
  const { card: Card, content: Content, image: Image } = getStyledComponentForBookCard(view);
  const { buttonType, buttonTitle } = getButtonStyles(isBooked, bookedTill!);

  return (
    <Card>
      <Content>
        <NavLink to={`/${RouteNames.books}/${category}/${id}`}>
          <Image>{image?.length ? <img alt={title} src={image[0]} /> : <CoverPlaceholder />}</Image>
          {view === ViewVariant.tiles ? (
            <TileBookInfo>
              {rating ? (
                <StarsRating rating={rating} variant={StarsRatingVariant.bookCard} showEmptyStars={false} />
              ) : (
                <p>{TextPlaceholder.noRatings}</p>
              )}
              <TileAbout>
                <h5>{title}</h5>
                <p>{author}</p>
              </TileAbout>
              <TileButtonContainer>
                <PrimaryButton type={buttonType} title={buttonTitle} disabled={isBooked && !!bookedTill} />
              </TileButtonContainer>
            </TileBookInfo>
          ) : (
            <ListBookInfo>
              <ListAbout>
                <h5>{title}</h5>
                <p>{author}</p>
              </ListAbout>
              <ListButtonContainer>
                {rating ? (
                  <StarsRating rating={rating} variant={StarsRatingVariant.bookCard} showEmptyStars={false} />
                ) : (
                  <p>{TextPlaceholder.noRatings}</p>
                )}
                <PrimaryButton type={buttonType} title={buttonTitle} disabled={isBooked && !!bookedTill} />
              </ListButtonContainer>
            </ListBookInfo>
          )}
        </NavLink>
      </Content>
    </Card>
  );
};
