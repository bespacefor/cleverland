import styled, { css } from 'styled-components';

export const CategoriesListPoint = styled.li<{ $isActive: boolean }>`
  font: ${({ theme }) => theme.fonts.bodyLarge};
  color: ${({ theme }) => theme.colors.main.dark};
  margin-bottom: 16px;
  letter-spacing: 0.1px;
  cursor: pointer;
  span {
    color: ${({ theme }) => theme.colors.grey.black43};
  }
  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      color: ${theme.colors.main.carrot};
      font-weight: bold;
    `}
`;
