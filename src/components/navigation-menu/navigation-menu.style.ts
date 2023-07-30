import styled from 'styled-components';

export const NavigationMenuContainer = styled.div<{ $isVisible: boolean }>`
  font-size: 24px;
  display: flex;
  margin-top: 20px;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const BurgerMenuContainer = styled.div<{ $isVisible: boolean }>`
  display: none;
  position: absolute;
  transition: left 0.1s;
  top: 20px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.grey.black5};
  left: ${(props) => (props.$isVisible ? '0' : '-1000px')};
  font-size: 24px;
  display: flex;
  margin-top: 20px;
  width: 65.5vw;
  padding: 32px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow.card};

  @media ${({ theme }) => theme.media.tablet} {
    display: flex;
  }
`;
