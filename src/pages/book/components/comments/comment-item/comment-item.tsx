import { FC } from 'react';

import { CommentContainer, ShortInfoContainer, CommentText, UserNameAndDate } from './comment-item.style';

import { avatarPlaceholder } from 'assets/images';
import { Avatar } from 'components/avatar';
import { StarsRating } from 'components/stars-rating';
import { CommentDTO } from 'types/types';

type CommentItemProps = {
  comment: CommentDTO;
};

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const formattedPublicationDate = new Date(comment.publicationDate).toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <CommentContainer>
      <ShortInfoContainer>
        <Avatar size={32} background={comment.avatar || avatarPlaceholder} />
        <UserNameAndDate>
          <p>
            {comment.firstName} {comment.lastName}
          </p>
          <p>{formattedPublicationDate}</p>
        </UserNameAndDate>
      </ShortInfoContainer>
      <StarsRating rating={comment.rating} stylesClass='ratingInComments' />
      {comment.commentText && <CommentText>{comment.commentText}</CommentText>}
    </CommentContainer>
  );
};
