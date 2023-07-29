import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 42px;
  height: 100vh;
  @media ${({ theme }) => theme.media.tablet} {
    gap: 46px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    gap: unset;
  }
`;

export const MainContainer = styled.div`
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 285px auto;
  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: auto;
  }
`;
