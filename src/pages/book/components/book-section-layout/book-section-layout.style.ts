import styled, { css } from 'styled-components';

export const BookSectionTitle = styled.h5<{ $paddingOnMobile: boolean }>`
  font: ${({ theme }) => theme.fonts.h5};
  @media ${({ theme }) => theme.media.tablet} {
    font: ${({ theme }) => theme.fonts.subtitleLarge};
  }
  @media ${({ theme }) => theme.media.mobile} {
    ${({ $paddingOnMobile, theme }) =>
      $paddingOnMobile &&
      css`
        padding-top: 16px;
        font: ${theme.fonts.mobileH3};
      `}
  }
  & span {
    margin-left: 6px;
    font: ${({ theme }) => theme.fonts.span};
    color: ${({ theme }) => theme.colors.grey.black43};
    @media ${({ theme }) => theme.media.tablet} {
      display: none;
    }
  }
`;
