import styled from 'styled-components';

import { BookCardContainer, BookImage } from './book-card.style';

export const ListCard = styled(BookCardContainer)`
  max-height: 218px;
  width: 100%;
  padding: 24px 24px 24px 16px;
  @media ${({ theme }) => theme.media.tablet} {
    max-height: unset;
    padding: 16px 24px 16px 16px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    padding: 16px 16px 16px 8px;
  }
`;

export const ListContent = styled.div`
  flex: 1;
  gap: 16px;
  display: flex;
  justify-content: flex-start;
  @media ${({ theme }) => theme.media.mobile} {
    gap: 8px;
  }
`;

export const ListBookImage = styled(BookImage)`
  border-radius: 3px;
  width: 120px;
  height: 170px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 70px;
    height: 100px;
  }
`;

export const ListBookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  @media ${({ theme }) => theme.media.tablet} {
    gap: 16px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    gap: unset;
  }
`;

export const ListAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h5 {
    font: ${({ theme }) => theme.fonts.h5};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 8px;
    @media ${({ theme }) => theme.media.tablet} {
      -webkit-line-clamp: inherit;
      font: ${({ theme }) => theme.fonts.h4};
      overflow: visible;
    }
    @media ${({ theme }) => theme.media.mobile} {
      margin-bottom: 4px;
      font: ${({ theme }) => theme.fonts.subtitleSmall};
    }
  }
  p {
    @media ${({ theme }) => theme.media.tablet} {
      font: ${({ theme }) => theme.fonts.bodyLarge};
    }
    @media ${({ theme }) => theme.media.mobile} {
      font: ${({ theme }) => theme.fonts.mobileBodySmall};
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

export const ListButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  button {
    max-width: 175px;
    @media ${({ theme }) => theme.media.mobile} {
      max-width: 100%;
    }
  }
`;
