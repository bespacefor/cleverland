import styled from 'styled-components';

const DefaultContainer = styled.div`
  display: flex;
  margin-top: 32px;
  flex: 1;
  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 24px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 19px;
  }
`;

export const TilesView = styled(DefaultContainer)`
  column-gap: 21.5px;
  row-gap: 24px;
  flex-wrap: wrap;
  @media ${({ theme }) => theme.media.tablet} {
    column-gap: 35px;
    row-gap: 32px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    row-gap: 16px;
  }
`;

export const ListView = styled(DefaultContainer)`
  row-gap: 16px;
  flex-direction: column;
  @media ${({ theme }) => theme.media.tablet} {
    gap: 16px;
  }
`;
