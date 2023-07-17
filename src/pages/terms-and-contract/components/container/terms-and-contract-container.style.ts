import styled from 'styled-components';

export const Container = styled.div`
  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 8px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 16px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex: 2;
  margin-bottom: 16px;
  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 12px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    margin-bottom: 24px;
  }
`;
