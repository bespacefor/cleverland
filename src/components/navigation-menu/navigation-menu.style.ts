import styled from 'styled-components';

export const NavigationMenuContainer = styled.div`
  font-size: 24px;
  display: flex;
  margin-top: 20px;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const BurgerMenuContainer = styled.div<{ $isMenuVisible: boolean }>`
  position: absolute;
  transition: left 0.1s;
  top: 20px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.grey.black5};
  left: ${(props) => (props.$isMenuVisible ? '0' : '-1000px')};
  font-size: 24px;
  display: flex;
  margin-top: 20px;
  padding: 32px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow.card};
  @media ${({ theme }) => theme.media.tablet} {
    width: 502px;
    display: flex;
    max-height: 87vh;
    overflow: auto;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 288px;
    padding: 32px 0 8px 0px;
  }
`;
