import React, { FC } from 'react';
import { styled } from 'styled-components';

import { TextPlaceholder } from 'types/enum';

type WithIconButtonProps = {
  title: TextPlaceholder;
  icon: FC;
};

const WithIconButtonContainer = styled.button`
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
  cursor: pointer;
  border: none;
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
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.shadow.button};
  }
`;

export const WithIconButton: FC<WithIconButtonProps> = React.memo(({ title, icon: Icon }) => (
  <WithIconButtonContainer type='button'>
    <Icon />
    <p>{title}</p>
  </WithIconButtonContainer>
));
