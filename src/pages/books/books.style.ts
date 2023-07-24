import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //margin: 20px 0;
  @media ${({ theme }) => theme.media.tablet} {
    margin: 8px 0 13px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin: 3px 0 60px;
  }
`;

export const BooksContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
