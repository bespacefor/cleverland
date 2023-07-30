import styled from 'styled-components';

export const HeaderAuthorizationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const Subtitle = styled.p`
  font: ${({ theme }) => theme.fonts.subtitleSmall};
`;
