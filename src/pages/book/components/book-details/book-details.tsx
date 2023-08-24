import { FC } from 'react';

import { DetailsColumn, DetailsContainer } from './book-details.style';

import { DetailsRow } from './details-row';

import { BookSectionLayout } from '../book-section-layout';

import { BookSectionTitle, DetailsTitles } from 'types/enum';
import { BookDTO } from 'types/types';

type BookDetailsProps = {
  book: BookDTO;
};

export const BookDetails: FC<BookDetailsProps> = ({
  book: {
    publishingHouse = '',
    publishingYear = '',
    pages = '',
    cover = '',
    format = '',
    genre = '',
    weight = '',
    ISBN = '',
    manufacturer = ''
  }
}) => (
  <BookSectionLayout title={BookSectionTitle.details}>
    <DetailsContainer>
      <DetailsColumn>
        <DetailsRow title={DetailsTitles.publishingHouse} content={publishingHouse} />
        <DetailsRow title={DetailsTitles.publishingYear} content={publishingYear} />
        <DetailsRow title={DetailsTitles.pages} content={pages} />
        <DetailsRow title={DetailsTitles.cover} content={cover} />
        <DetailsRow title={DetailsTitles.format} content={format} />
      </DetailsColumn>
      <DetailsColumn>
        <DetailsRow title={DetailsTitles.genre} content={genre} hideOnTablet={true} />
        <DetailsRow title={DetailsTitles.weight} content={weight} />
        <DetailsRow title={DetailsTitles.ISBN} content={ISBN} />
        <DetailsRow title={DetailsTitles.manufacturer} content={manufacturer} />
      </DetailsColumn>
    </DetailsContainer>
  </BookSectionLayout>
);
