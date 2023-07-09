import styled from 'styled-components';

export const AvatarContainer = styled.div<{ size: number; background: string }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-image: ${({ background }) => `url(${background})`};
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
`;
