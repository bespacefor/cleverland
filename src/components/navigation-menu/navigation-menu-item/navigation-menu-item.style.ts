import styled from 'styled-components';

export const NavigationMenuPoint = styled.li`
  margin-bottom: 40px;
  font: ${({ theme }) => theme.fonts.h5};
  cursor: pointer;
  position: relative;
`;

export const CurrentActiveLink = styled.div`
  position: relative;
  width: 255px;
  svg {
    position: absolute;
    top: 0;
    right: 36px;
    path {
      fill: ${({ theme }) => theme.colors.button.hover};
    }
  }
  & .mainLink {
    &::after {
      display: flex;
      position: absolute;
      content: '';
      height: 1px;
      background: ${({ theme }) => theme.colors.button.hover};
      top: 38px;
      left: 0;
      right: 0;
      width: 0%;
      transition: 0.5s linear;
    }
    &.active {
      position: relative;
      color: ${({ theme }) => theme.colors.main.carrot};
      &::after {
        width: 90%;
      }
    }
  }
`;
