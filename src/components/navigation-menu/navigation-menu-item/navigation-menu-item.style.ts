import styled, { css } from 'styled-components';

export const MenuSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey.black20};
  margin-bottom: 32px;
`;

export const NavigationMenuPoint = styled.li`
  margin-bottom: 40px;
  font: ${({ theme }) => theme.fonts.h5};
  cursor: pointer;
  position: relative;

  @media ${({ theme }) => theme.media.mobile} {
    padding-left: 16px;
    &:last-child {
      padding-bottom: 16px;
    }
  }
`;

export const CurrentLink = styled.div`
  position: relative;
  width: 255px;
  svg {
    position: absolute;
    top: 0;
    right: 12px;
    path {
      fill: ${({ theme }) => theme.colors.main.carrot};
    }
  }
`;

export const CurrentActiveLink = styled.span<{ $isActive: boolean }>`
  ${(props) =>
    props.$isActive &&
    css`
      color: ${({ theme }) => theme.colors.main.carrot};
    `}
  &::after {
    display: flex;
    position: absolute;
    content: '';
    height: 1px;
    background: ${({ theme }) => theme.colors.button.hover};
    top: 38px;
    left: 0;
    right: 0;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0%')};
    transition: 0.5s linear;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const LinkContent = styled.span`
  display: block;
`;
