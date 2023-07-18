import styled from 'styled-components';

export const BreadcrumbsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.grey.black5};
  padding: 20px 0;
  width: 100%;
  @media ${({ theme }) => theme.media.mobile} {
    padding: 16px 0 22px;
    margin-bottom: 20px;
  }
`;

export const BreadcrumbsContent = styled.div`
  & p {
    span {
      color: ${({ theme }) => theme.colors.grey.black40};
      font: ${({ theme }) => theme.fonts.bodySmall};
      padding-right: 32px;
      position: relative;
      &:not(:last-child)::after {
        position: absolute;
        content: '/';
        top: 0;
        right: 12px;
      }
      @media ${({ theme }) => theme.media.mobile} {
        font: ${({ theme }) => theme.fonts.infoLarge};
      }
    }
  }
`;
