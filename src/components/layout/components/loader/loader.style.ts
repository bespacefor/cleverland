import styled, { keyframes } from 'styled-components';

import { LoaderIcon } from 'assets/icons';

export const spinAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div<{ $isLoading: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.main.dark30};
  backdrop-filter: blur(10px);
  display: ${({ $isLoading }) => ($isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const LoaderAnimation = styled(LoaderIcon)`
  animation: ${spinAnimation} 1.5s linear infinite;
`;
