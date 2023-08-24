import { FC, useEffect, useRef, useState } from 'react';

import { MobileOnly, SearchInputContainer, Input, SearchIcon, CloseButton, CloseIcon } from './search-input.style';

import { Search } from 'assets/icons';
import { CircleButton } from 'components/buttons/circle-button';
import { TextPlaceholder, ViewVariant } from 'types/enum';

type SearchInputProps = {
  $isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ $isOpen, setIsOpen }) => {
  const [currentValue, setCurrentValue] = useState('');
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [blur, setBlur] = useState(true);

  const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if ($isOpen) {
      searchInputRef.current?.focus();
    }
  }, [$isOpen]);

  return (
    <>
      <MobileOnly>
        {!$isOpen && (
          <CircleButton
            onClick={() => {
              setIsOpen(!$isOpen);
            }}
            type={ViewVariant.search}
            icon={Search}
            $isActive={false}
          />
        )}
      </MobileOnly>
      <SearchInputContainer $isOpen={$isOpen}>
        <Input
          type='text'
          onChange={changeText}
          ref={searchInputRef}
          value={currentValue}
          onFocus={() => setBlur(false)}
          onBlur={() => {
            setIsOpen(false);
            setBlur(true);
          }}
          placeholder={TextPlaceholder.searching}
        />
        <SearchIcon />
        <CloseButton $isBlur={blur}>
          <CloseIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </CloseButton>
      </SearchInputContainer>
    </>
  );
};
