import styled from 'styled-components';

export const BookCardContainer = styled.div`
  box-shadow: ${({ theme }) => theme.colors.shadow.card};
  border-radius: 10px;
  padding: 8px 8px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookImage = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.grey.black40}`};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: auto;
  }
`;
