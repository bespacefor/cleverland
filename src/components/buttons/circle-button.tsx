import React, { FC, useCallback } from 'react';

import styled from 'styled-components';

import { ViewVariant } from 'types/enum';

type CircleButtonProps = {
  type: ViewVariant;
  icon: FC;
  onClick: (type: ViewVariant) => void;
  $isActive: boolean;
};

const CircleButtonContainer = styled.button<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background: ${({ theme, $isActive }) => ($isActive ? theme.colors.button.hover : theme.colors.main.white)};
  border: none;
  filter: ${({ theme }) => theme.colors.shadow.buttonFilter};
  border-radius: 100%;
  cursor: pointer;
  @media ${({ theme }) => theme.media.mobile} {
    width: 32px;
    height: 32px;
  }
  & svg {
    width: 19px;
    height: 19px;
    & path {
      fill: ${({ theme, $isActive }) => ($isActive ? theme.colors.main.white : theme.colors.grey.black40)};
    }
  }
  &:hover {
    box-shadow: ${({ theme, $isActive }) => ($isActive ? theme.colors.shadow.button : theme.colors.shadow.button)};
    border: ${({ theme, $isActive }) => $isActive && `1px solid ${theme.colors.main.hover}`};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.colors.shadow.pressed};
    border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
  }
  &:disabled {
    background: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey.black42 : theme.colors.grey.black5)};
    border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
    &:hover {
      box-shadow: none;
      background: ${({ theme }) => theme.colors.grey.black5};
      border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
    }
  }
`;

export const CircleButton: FC<CircleButtonProps> = React.memo(({ type, icon: Icon, onClick, $isActive }) => {
  const setActive = useCallback(() => {
    onClick(type);
  }, [onClick, type]);

  return (
    <CircleButtonContainer onClick={setActive} $isActive={$isActive}>
      <Icon />
    </CircleButtonContainer>
  );
});
