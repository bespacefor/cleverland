import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 62px;
  @media ${({ theme }) => theme.media.tablet} {
    gap: 52px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    gap: 42px;
  }
`;

export const ButtonContainer = styled.div`
  width: 350px;
  margin-top: 42px;
  .buttonInBookPage {
    padding: 14px 0;
    border-radius: 30px;
    @media ${({ theme }) => theme.media.mobile} {
      padding: 11px 0;
      border-radius: 20px;
    }
    p {
      font: ${({ theme }) => theme.fonts.subtitleLarge};
      @media ${({ theme }) => theme.media.mobile} {
        font: ${({ theme }) => theme.fonts.buttonSmall};
      }
    }
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin: 20px auto;
  }
`;
