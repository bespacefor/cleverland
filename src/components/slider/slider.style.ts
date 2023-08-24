import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 445px;
  height: 696px;
  overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  @media ${({ theme }) => theme.media.tablet} {
    grid-row-end: 2;
    width: 136px;
    height: 238px;
    border-radius: 3px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin: 0 auto;
    width: 188px;
    height: 300px;
    border-radius: 10px;
  }
  & .preview-main {
    height: 594px;
    .swiper-slide {
      border-radius: 10px;
      border: ${({ theme }) => `1px solid ${theme.colors.grey.black40}`};
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  & .preview-mini {
    height: 86px;
    margin-top: 16px;
    .swiper-slide {
      width: 19% !important;
      cursor: pointer;
      &-thumb-active {
        .preview-mini-wrapper {
          border-color: ${({ theme }) => theme.colors.main.carrot};
        }
      }
    }
    &-wrapper {
      width: 65px;
      height: 86px;
      overflow: hidden;
      position: relative;
      border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
      border-radius: 3px;
      & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  & .dotted-slider {
    @media ${({ theme }) => theme.media.tablet} {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .swiper-slide {
      width: 136px;
      height: 198px;
      margin-right: 30px;
      border: ${({ theme }) => `1px solid ${theme.colors.grey.black40}`};
      border-radius: 3px;
      overflow: hidden;
      @media ${({ theme }) => theme.media.mobile} {
        height: 260px;
        border-radius: 10px;
      }
    }
    .swiper-pagination {
      position: relative;
      margin-top: 25px;
      &-bullet-active {
        background-color: ${({ theme }) => theme.colors.main.dark};
        scale: 1.3;
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
