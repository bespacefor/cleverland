import styled from 'styled-components';

export const BurgerContainer = styled.div`
  display: none;
  cursor: pointer;

  @media ${({ theme }) => theme.media.tablet} {
    display: block;
    padding: 2px;
  }
`;

export const BurgerButton = styled.span<{ $isBurgerOpen: boolean }>`
  display: block;
  z-index: 100;
  cursor: pointer;
  width: 27px;
  height: 2px;
  background-color: ${({ $isBurgerOpen, theme }) => ($isBurgerOpen ? 'transparent' : theme.colors.main.dark)};
  border-radius: 2px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before,
  &::after {
    border-radius: 2px;
    position: absolute;
    content: '';
    width: 27px;
    height: 2px;
    top: 50%;
    background-color: ${({ theme }) => theme.colors.main.dark};
    transition: transform 0.2s ease-in-out;

    @media ${({ theme }) => theme.media.mobile} {
      width: 20px;
    }
  }

  &::after {
    transform: ${({ $isBurgerOpen }) => $isBurgerOpen && 'rotate(45deg)'};
    top: ${({ $isBurgerOpen }) => ($isBurgerOpen ? '50%' : '-7px')};
  }

  &::before {
    transform: ${({ $isBurgerOpen }) => $isBurgerOpen && 'rotate(-45deg)'};
    top: ${({ $isBurgerOpen }) => ($isBurgerOpen ? '50%' : '7px')};
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 20px;
  }
`;
