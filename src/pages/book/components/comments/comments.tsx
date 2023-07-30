import { FC } from 'react';

import { styled } from 'styled-components';

import { CommentsList } from './comments-list';

import { BookSectionLayout } from '../book-section-layout';

import { BookSectionTitle } from 'types/enum';
import { CommentDTO } from 'types/types';

type CommentsProps = {
  comments: CommentDTO[];
};

export const CommentsContainer = styled.div`
  width: 65%;
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

export const Comments: FC<CommentsProps> = ({ comments }) => (
  <BookSectionLayout paddingOnMobile={true} title={BookSectionTitle.comments} amount={comments.length}>
    <CommentsContainer>
      <CommentsList comments={comments} />
    </CommentsContainer>
  </BookSectionLayout>
);
