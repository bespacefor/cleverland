import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-column-gap: 145px;
  @media ${({ theme }) => theme.media.tablet} {
    grid-column-gap: 75px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    grid-template-columns: auto;
    grid-row-gap: 16px;
  }
`;

export const DetailsColumn = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: repeat(4, max-content);
  grid-column-gap: 72px;
  grid-row-gap: 16px;
  @media ${({ theme }) => theme.media.tablet} {
    grid-column-gap: 34px;
    grid-row-gap: 16px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    grid-column-gap: 42px;
    grid-template-columns: min-content auto;
  }
`;
