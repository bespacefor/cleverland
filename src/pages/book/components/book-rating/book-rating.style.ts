import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  font: ${({ theme }) => theme.fonts.h5};
  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
  .ratingInBookPage {
    gap: 16px;
    & svg {
      @media ${({ theme }) => theme.media.mobile} {
        width: 30px;
        height: 30px;
      }
    }
  }
  p {
    font: ${({ theme }) => theme.fonts.bodySmall};
    white-space: nowrap;
  }
`;
