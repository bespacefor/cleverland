import { FC, useMemo } from 'react';

import {
  AboutContainer,
  AuthorContainer,
  ButtonContainer,
  ContentBook,
  ContentContainer,
  ImageContainer,
  MainInfoContainer
} from './book-main-info.style';

import { BookSectionLayout } from '../book-section-layout';

import { CoverPlaceholder } from 'assets/icons';
import { PrimaryButton } from 'components/buttons/primary-button';
import { Slider } from 'components/slider';
import { BookSectionTitle } from 'types/enum';
import { BookDTO } from 'types/types';
import { getButtonStyles } from 'utils/get-button-styles';
import { keyExtractor } from 'utils/key-extractor';

type BookMainInfoProps = {
  book: BookDTO;
};

export const BookMainInfo: FC<BookMainInfoProps> = ({ book }) => {
  const { image, title, author, publishingYear, isBooked, bookedTill, about } = book;
  const { buttonType, buttonTitle } = getButtonStyles(isBooked, bookedTill!);

  const getImagesSection = useMemo(
    () =>
      !image?.length ? (
        <ImageContainer>
          <CoverPlaceholder />
        </ImageContainer>
      ) : image.length > 1 ? (
        <Slider images={image} />
      ) : (
        <ImageContainer>
          <img alt={title} src={image[0]} />
        </ImageContainer>
      ),
    [image, title]
  );

  return (
    <MainInfoContainer>
      {getImagesSection}
      <ContentContainer>
        <h3>{title}</h3>
        <AuthorContainer>
          {author}, {publishingYear}
        </AuthorContainer>
        <ButtonContainer>
          <PrimaryButton
            title={buttonTitle}
            type={buttonType}
            disabled={isBooked && !!bookedTill}
            stylesClass='buttonInBookPage'
          />
        </ButtonContainer>
      </ContentContainer>
      <AboutContainer>
        <BookSectionLayout title={BookSectionTitle.about}>
          {about.split('\n').map((item, index) => (
            <ContentBook key={keyExtractor(index)}>{item}</ContentBook>
          ))}
        </BookSectionLayout>
      </AboutContainer>
    </MainInfoContainer>
  );
};
