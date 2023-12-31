import styled from 'styled-components';

export const BooksCategoriesList = styled.ul<{ $isListOpen: boolean }>`
  display: ${({ $isListOpen }) => ($isListOpen ? 'block' : 'none')};
  padding: 0 5px 0 20px;
  margin-top: 25px;
  .active {
    color: ${({ theme }) => theme.colors.main.carrot};
  }
  & ul {
    padding-left: 5px;
    margin-top: 16px;
  }
`;
