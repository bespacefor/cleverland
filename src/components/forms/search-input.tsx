import { FC, useState } from 'react';

import styled from 'styled-components';

import { Close, Search } from 'assets/icons';
import { TextPlaceholder } from 'types/enum';

const SearchInputContainer = styled.div`
  width: 350px;
  height: 38px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.colors.shadow.card};
  padding: 10px 16px;
  position: relative;
  @media ${({ theme }) => theme.media.tablet} {
    width: 274px;
  }
  & input {
    width: 100%;
    height: 100%;
    outline: none;
    font: ${({ theme }) => theme.fonts.bodySmall};
    letter-spacing: 0.1px;
    padding-left: 25px;
    border: none;
    &:focus {
      & ~ .searchIcon {
        path {
          fill: ${({ theme }) => theme.colors.main.accent};
        }
      }
    }
  }
  & .searchIcon {
    position: absolute;
    top: 10px;
    left: 16px;
    width: 16px;
    height: 16px;
    path {
      fill: ${({ theme }) => theme.colors.grey.black40};
    }
  }
  & .searchCancelIcon {
    position: absolute;
    top: 10px;
    right: 16px;
    width: 16px;
    height: 16px;
    path {
      fill: ${({ theme }) => theme.colors.main.accent};
    }
  }
  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.main.hover}`};
    box-shadow: ${({ theme }) => theme.colors.shadow.button};
  }
`;

export const SearchInput: FC = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [blur, setBlur] = useState(true);

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  return (
    <SearchInputContainer>
      <input
        type='text'
        onChange={changeText}
        value={currentValue}
        onFocus={() => setBlur(false)}
        onBlur={() => setBlur(true)}
        placeholder={TextPlaceholder.searching}
      />
      <Search className='searchIcon' />
      {!blur && <Close className='searchCancelIcon' />}
    </SearchInputContainer>
  );
};
