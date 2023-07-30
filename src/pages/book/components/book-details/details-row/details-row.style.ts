import styled, { css } from 'styled-components';

type DetailsRowStyleProps = {
  $showOnlyOnMobile?: boolean;
  $hideOnTablet?: boolean;
};

const commonStyles = css<DetailsRowStyleProps>`
  flex: 1;
  display: ${(props) => (props.$showOnlyOnMobile ? 'none' : 'block')};

  @media ${({ theme }) => theme.media.tablet} {
    display: ${(props) => (props.$hideOnTablet ? 'none' : 'block')};
  }
`;

export const TitleContainer = styled.h6<DetailsRowStyleProps>`
  font: ${({ theme }) => theme.fonts.subtitleLarge};
  color: ${({ theme }) => theme.colors.grey.black43};
  ${commonStyles}
  @media ${({ theme }) => theme.media.tablet} {
    font: ${({ theme }) => theme.fonts.subtitleSmall};
  }
  @media ${({ theme }) => theme.media.mobile} {
    font: ${({ theme }) => theme.fonts.infoLarge};
  }
`;

export const InfoContainer = styled.p<DetailsRowStyleProps>`
  font: ${({ theme }) => theme.fonts.bodyLarge};
  ${commonStyles}
  @media ${({ theme }) => theme.media.tablet} {
    font: ${({ theme }) => theme.fonts.bodySmall};
  }
  @media ${({ theme }) => theme.media.mobile} {
    font: ${({ theme }) => theme.fonts.infoSmall};
  }
`;
