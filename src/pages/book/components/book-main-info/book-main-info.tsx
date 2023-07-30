import { FC } from 'react';

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

  return (
    <MainInfoContainer>
      <ImageContainer>{image ? <img alt={title} src={image} /> : <CoverPlaceholder />}</ImageContainer>
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
