import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    gap: 8px;
  }
`;

export const ShortInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media ${({ theme }) => theme.media.mobile} {
    gap: 18px;
  }
`;

export const UserNameAndDate = styled.div`
  display: flex;
  column-gap: 25px;
  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
  }

  p {
    font: ${({ theme }) => theme.fonts.bodyLarge};
    color: ${({ theme }) => theme.colors.grey.black70};
    @media ${({ theme }) => theme.media.mobile} {
      font: ${({ theme }) => theme.fonts.span};
    }
  }
`;

export const CommentText = styled.p`
  font: ${({ theme }) => theme.fonts.bodyLarge};
  color: ${({ theme }) => theme.colors.main.dark};
  @media ${({ theme }) => theme.media.mobile} {
    font: ${({ theme }) => theme.fonts.span};
  }
`;
