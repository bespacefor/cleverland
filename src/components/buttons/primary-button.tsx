import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { ButtonType } from 'types/enum';

type PrimaryButtonProps = {
  title: string;
  type?: ButtonType;
  disabled?: boolean;
  stylesClass?: string;
};

const buttonStyles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 23px;
  border-radius: 20px;
  cursor: pointer;
  & p {
    font: ${({ theme }) => theme.fonts.buttonSmall};
    text-transform: uppercase;
    letter-spacing: 0.2px;
  }
`;

const PrimaryButtonContainer = styled.button<{ disabled?: boolean }>`
  ${buttonStyles}
  &.primaryButton {
    background: ${({ theme }) => theme.colors.button.hover};
    border: none;
    & p {
      color: ${({ theme }) => theme.colors.main.white};
    }
    &:hover {
      border: ${({ theme }) => `1px solid ${theme.colors.main.hover}`};
      box-shadow: ${({ theme }) => theme.colors.shadow.button};
    }
    &:active {
      box-shadow: ${({ theme }) => theme.colors.shadow.pressed};
    }
    &:disabled {
      background: ${({ theme }) => theme.colors.grey.black42};
      cursor: not-allowed;
    }
  }
  &.secondaryButton {
    background: ${({ theme }) => theme.colors.main.white};
    border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
    & p {
      color: ${({ theme }) => theme.colors.main.dark};
    }
    &:hover {
      border: ${({ theme }) => `1px solid ${theme.colors.grey.black40}`};
      box-shadow: ${({ theme }) => theme.colors.shadow.button};
    }
    &:active {
      border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
      box-shadow: ${({ theme }) => theme.colors.shadow.pressed};
    }
    &:disabled {
      border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
      background: ${({ theme }) => theme.colors.grey.black5};
      cursor: not-allowed;
      p {
        color: ${({ theme }) => theme.colors.grey.black40};
      }
      &:hover {
        box-shadow: none;
        border: ${({ theme }) => `1px solid ${theme.colors.grey.black20}`};
        background: ${({ theme }) => theme.colors.grey.black5};
      }
    }
  }
`;

export const PrimaryButton: FC<PrimaryButtonProps> = React.memo(({ title, type, disabled, stylesClass }) => (
  <PrimaryButtonContainer type='button' disabled={disabled} className={`${type} ${stylesClass}`}>
    <p>{title}</p>
  </PrimaryButtonContainer>
));
