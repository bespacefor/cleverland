import styled from 'styled-components';

import { Close, Search } from 'assets/icons';

export const SearchInputContainer = styled.div<{ $isOpen: boolean }>`
  width: 350px;
  padding: 10px 16px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.colors.shadow.card};
  position: relative;

  @media ${({ theme }) => theme.media.tablet} {
    width: 274px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
    padding: 7px 16px;
    width: 284px;
  }

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.main.hover}`};
    box-shadow: ${({ theme }) => theme.colors.shadow.button};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  font: ${({ theme }) => theme.fonts.bodySmall};
  letter-spacing: 0.1px;
  padding-left: 25px;
  border: none;

  @media ${({ theme }) => theme.media.mobile} {
    padding-left: 0;
  }

  &:focus {
    ~ .searchIcon {
      path {
        fill: ${({ theme }) => theme.colors.main.accent};
      }
    }
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 10px;
  left: 16px;
  width: 16px;
  height: 16px;

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }

  path {
    fill: ${({ theme }) => theme.colors.grey.black40};
  }
`;

export const CloseButton = styled.span<{ $isBlur: boolean }>`
  display: ${(props) => (props.$isBlur ? 'none' : 'block')};
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  right: 0;

  path {
    fill: ${(props) => props.theme.colors.main.accent};
  }
`;

export const CloseIcon = styled(Close)`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 16px;

  @media ${({ theme }) => theme.media.mobile} {
    top: 6px;
    right: 12px;
  }

  path {
    fill: ${({ theme }) => theme.colors.main.accent};
  }
`;

export const MobileOnly = styled.div`
  display: none;
  @media ${({ theme }) => theme.media.mobile} {
    display: flex;
  }
`;
