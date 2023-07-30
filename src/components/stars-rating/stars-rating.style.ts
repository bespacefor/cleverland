import styled, { css } from 'styled-components';

import { StarsRatingVariant } from 'types/enum';

type ContainerProps = {
  variant?: string;
};

export const BookRatingContainer = styled.div`
  gap: 16px;
  & svg {
    @media ${({ theme }) => theme.media.mobile} {
      width: 30px;
      height: 30px;
    }
  }
`;

export const CommentItemContainer = styled.div`
  gap: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    gap: 8px;
  }
  & svg {
    @media ${({ theme }) => theme.media.mobile} {
      width: 24px;
      height: 24px;
    }
  }
`;

export const BookCardContainer = styled.div`
  @media ${({ theme }) => theme.media.mobile} {
    gap: 8px;
  }
  & p {
    @media ${({ theme }) => theme.media.mobile} {
      font: ${({ theme }) => theme.fonts.mobileBodySmall};
    }
  }
  & svg {
    @media ${({ theme }) => theme.media.mobile} {
      width: 14px;
      height: 14px;
    }
  }
`;

export const Container = styled.div.attrs<ContainerProps>((props) => ({
  variant: undefined
}))<ContainerProps>`
  display: flex;
  gap: 10px;

  & svg {
    @media ${({ theme }) => theme.media.mobile} {
      width: 24px;
      height: 24px;
    }
  }

  ${({ variant }) => {
    switch (variant) {
      case StarsRatingVariant.bookRating:
        return css`
          ${BookRatingContainer}
        `;
      case StarsRatingVariant.commentItem:
        return css`
          ${CommentItemContainer}
        `;
      case StarsRatingVariant.bookCard:
        return css`
          ${BookCardContainer}
        `;
      default:
        return '';
    }
  }};
`;
