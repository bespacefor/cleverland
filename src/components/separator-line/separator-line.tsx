import styled from 'styled-components';

export const SeparatorLine = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.black42};
  height: 1px;
  width: 350px;
  margin: 16px 0;
  @media ${({ theme }) => theme.media.tablet} {
    width: 305px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 209px;
    margin: 8px 0;
  }
`;
