import React, { FC } from 'react';
import { styled } from 'styled-components';

import { TextPlaceholder } from 'types/enum';

type WithIconButtonProps = {
  title: TextPlaceholder;
  icon: FC;
  $isOpen?: boolean;
};

const WithIconButtonContainer = styled.button<{ $isOpen: boolean }>`
  height: 38px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.main.white};
  box-shadow: ${({ theme }) => theme.colors.shadow.card};
  padding: 10px 16px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  @media ${({ theme }) => theme.media.mobile} {
    display: ${(props) => (props.$isOpen ? 'none' : 'block')};
    width: 32px;
    height: 32px;
    padding: 0;
  }

  & svg {
    width: 16px;
    height: 16px;
    & path {
      fill: ${({ theme }) => theme.colors.grey.black40};
    }
  }
  & p {
    color: ${({ theme }) => theme.colors.grey.black40};
    font: ${({ theme }) => theme.fonts.bodySmall};
    letter-spacing: 0.1px;
    @media ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow.button};
  }
`;

export const WithIconButton: FC<WithIconButtonProps> = React.memo(({ title, icon: Icon, $isOpen = true }) => (
  <WithIconButtonContainer type='button' $isOpen={$isOpen}>
    <Icon />
    <p>{title}</p>
  </WithIconButtonContainer>
));
