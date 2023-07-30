import { FC } from 'react';

import { CommentContainer, ShortInfoContainer, CommentText, UserNameAndDate } from './comment-item.style';

import { avatarPlaceholder } from 'assets/images';
import { Avatar } from 'components/avatar';
import { StarsRating } from 'components/stars-rating';
import { StarsRatingVariant } from 'types/enum';
import { CommentDTO } from 'types/types';
import { formatPostDate } from 'utils/format-post-date';

type CommentItemProps = {
  comment: CommentDTO;
};

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const formattedDate = formatPostDate(new Date(comment.publicationDate));
  return (
    <CommentContainer>
      <ShortInfoContainer>
        <Avatar size={32} background={comment.avatar || avatarPlaceholder} />
        <UserNameAndDate>
          <p>
            {comment.firstName} {comment.lastName}
          </p>
          <p>{formattedDate}</p>
        </UserNameAndDate>
      </ShortInfoContainer>
      <StarsRating rating={comment.rating} variant={StarsRatingVariant.commentItem} />
      {comment.commentText && <CommentText>{comment.commentText}</CommentText>}
    </CommentContainer>
  );
};
