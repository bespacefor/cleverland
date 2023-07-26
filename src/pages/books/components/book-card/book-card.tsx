import { FC } from 'react';

import { getStyledComponentForBookCard } from './book-card.utils';
import { ListAbout, ListBookInfo, ListButtonContainer } from './list-card.style';
import { TileAbout, TileBookInfo, TileButtonContainer } from './tile-card.styles';

import { CoverPlaceholder } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { StarsRating } from 'components/stars-rating';
import { ViewVariant } from 'types/enum';
import { BookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';

type BookProps = {
  book: BookDTO;
  view: ViewVariant;
};

export const BookCard: FC<BookProps> = ({ book: { image, title, author, isBooked, bookedTill, rating }, view }) => {
  const { card: Card, content: Content, image: Image } = getStyledComponentForBookCard(view);
  const { buttonType, buttonTitle } = getButtonStyles(isBooked, bookedTill!);

  return (
    <Card>
      <Content>
        <Image>{image ? <img alt={title} src={image} /> : <CoverPlaceholder />}</Image>
        {view === ViewVariant.tiles ? (
          <TileBookInfo>
            <StarsRating rating={rating} stylesClass='ratingTileCard' />
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
              <StarsRating rating={rating} stylesClass='ratingListCard' />
              <PrimaryButton type={buttonType} title={buttonTitle} disabled={isBooked && !!bookedTill} />
            </ListButtonContainer>
          </ListBookInfo>
        )}
      </Content>
    </Card>
  );
};
