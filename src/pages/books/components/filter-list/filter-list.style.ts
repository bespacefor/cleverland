import styled from 'styled-components';

type ButtonsContainerProps = {
  $isSearchOpen: boolean;
};

export const FilterListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DefaultButtonsContainer = styled.div<ButtonsContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  @media ${({ theme }) => theme.media.mobile} {
    display: ${(props) => (props.$isSearchOpen ? 'none' : 'flex')};
  }
`;

export const ButtonsContainer = styled(DefaultButtonsContainer)<ButtonsContainerProps>`
  display: flex;
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
    gap: ${(props) => (props.$isSearchOpen ? 0 : '16px')};
  }
`;
