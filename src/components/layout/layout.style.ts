import styled from 'styled-components';

export const LayoutContainer = styled.div<{ $isBurgerMenuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  gap: 42px;
  overflow: ${(props) => (props.$isBurgerMenuOpen ? 'hidden' : 'auto')};
  @media ${({ theme }) => theme.media.tablet} {
    gap: 46px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    gap: unset;
  }
`;

export const Overlay = styled.div<{ $isOverlayVisible: boolean }>`
  width: ${(props) => props.$isOverlayVisible && '100vw'};
  height: ${(props) => props.$isOverlayVisible && '100vh'};
  background-color: ${(props) => props.$isOverlayVisible && props.theme.colors.main.dark30};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const MainContentContainer = styled.div`
  flex: 1 0 auto;
  display: grid;
  grid-template-columns: 285px auto;
  @media ${({ theme }) => theme.media.tablet} {
    grid-template-columns: auto;
  }
`;
