import styled from 'styled-components';

type ButtonsContainerProps = {
  $isVisibleMobile: boolean;
};

export const FilterListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DefaultButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const ButtonsContainer = styled(DefaultButtonsContainer)<ButtonsContainerProps>`
  display: ${(props) => (props.$isVisibleMobile ? 'none' : 'flex')};
  @media ${({ theme }) => theme.media.mobile} {
    display: ${(props) => (props.$isVisibleMobile ? 'flex' : 'none')};
  }
`;
