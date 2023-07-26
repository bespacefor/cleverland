import styled from 'styled-components';

export const MainInfoContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 30px;
  margin-bottom: 42px;
  @media ${({ theme }) => theme.media.tablet} {
    column-gap: 32px;
    row-gap: 16px;
    grid-template-columns: min-content auto;
    margin-bottom: 52px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    grid-template-columns: auto;
    gap: 16px;
    margin-bottom: 42px;
  }
`;

export const ImageContainer = styled.div`
  width: 445px;
  height: 594px;
  border: ${({ theme }) => `1px solid ${theme.colors.grey.black43}`};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  & img {
    height: 100%;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 136px;
    height: 198px;
    border-radius: 3px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin: 0 auto;
    width: 188px;
    height: 260px;
    border-radius: 10px;
  }
`;

export const ContentContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  h3 {
    font: ${({ theme }) => theme.fonts.h3};
    @media ${({ theme }) => theme.media.tablet} {
      font: ${({ theme }) => theme.fonts.h4};
    }
    @media ${({ theme }) => theme.media.mobile} {
      font: ${({ theme }) => theme.fonts.mobileH3};
    }
  }
`;

export const AuthorContainer = styled.h5`
  font: ${({ theme }) => theme.fonts.h5};
  color: ${({ theme }) => theme.colors.grey.black43};
  margin: 24px 0 32px;
  @media ${({ theme }) => theme.media.tablet} {
    font: ${({ theme }) => theme.fonts.subtitleSmall};
    margin: 34px 0 32px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    font: ${({ theme }) => theme.fonts.mobileBodySmall};
    margin: 8px 0 42px;
  }
`;

export const ButtonContainer = styled.div`
  width: 350px;
  margin-bottom: 32px;
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
    width: 306px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    margin-bottom: 26px;
  }
`;

export const AboutContainer = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  @media ${({ theme }) => theme.media.mobile} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

export const ContentBook = styled.p`
  font: ${({ theme }) => theme.fonts.bodyLarge};
  @media ${({ theme }) => theme.media.mobile} {
    font: ${({ theme }) => theme.fonts.mobileBodySmall};
  }
  &:not(:last-child) {
    margin-bottom: 25px;
    @media ${({ theme }) => theme.media.mobile} {
      margin-bottom: 0;
    }
  }
`;
