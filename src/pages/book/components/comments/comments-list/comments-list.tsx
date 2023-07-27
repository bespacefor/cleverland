import { FC } from 'react';
import styled from 'styled-components';

import { CommentItem } from '../comment-item';

import { CommentDTO } from 'types/types';
import { keyExtractor } from 'utils/key-extractor';

type CommentsListProps = {
  comments: CommentDTO[];
};

const CommentsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: flex-start;

  @media ${({ theme }) => theme.media.mobile} {
    gap: 30px;
  }
`;

export const CommentsList: FC<CommentsListProps> = ({ comments }) => (
  <CommentsListContainer>
    {comments.map((comment, index) => (
      <CommentItem key={keyExtractor(index)} comment={comment} />
    ))}
  </CommentsListContainer>
);
