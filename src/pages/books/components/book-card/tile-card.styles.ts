import styled from 'styled-components';

import { BookCardContainer, BookImage } from './book-card.style';

export const TileCard = styled(BookCardContainer)`
  height: 470px;
  width: 190px;
  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    padding: 8px 16px 16px;
  }
`;

export const TileContent = styled.div`
  flex: 1;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TileBookImage = styled(BookImage)`
  border-radius: 10px;
  height: 240px;
  @media ${({ theme }) => theme.media.mobile} {
    margin: 0 auto;
    width: 174px;
  }
`;

export const TileBookInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & .ratingTileCard {
    @media ${({ theme }) => theme.media.tablet} {
      margin-bottom: 30px;
    }
    @media ${({ theme }) => theme.media.mobile} {
      margin-bottom: 20px;
    }
  }
`;

export const TileAbout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  text-overflow: ellipsis;
  @media ${({ theme }) => theme.media.tablet} {
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.media.mobile} {
    justify-content: flex-start;
    gap: 8px;
  }
  h5 {
    font: ${({ theme }) => theme.fonts.subtitleSmall};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media ${({ theme }) => theme.media.tablet} {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      font: ${({ theme }) => theme.fonts.h5Tablet};
    }
    @media ${({ theme }) => theme.media.mobile} {
      -webkit-line-clamp: 3;
      font: ${({ theme }) => theme.fonts.subtitleSmall};
    }
  }
  p {
    font: ${({ theme }) => theme.fonts.bodySmall};
    @media ${({ theme }) => theme.media.tablet} {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: ${({ theme }) => theme.colors.grey.black70};
      font: ${({ theme }) => theme.fonts.h5Tablet};
      text-transform: uppercase;
    }
    @media ${({ theme }) => theme.media.mobile} {
      font: ${({ theme }) => theme.fonts.mobileBodySmall};
      text-transform: unset;
    }
  }
`;

export const TileButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 6px;
  @media ${({ theme }) => theme.media.tablet} {
    margin: 24px 6px 0;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin: 0;
  }
`;
