import { FC, useState } from 'react';

import { ButtonsContainer, DefaultButtonsContainer, FilterListContainer } from './filter-list.style';

import { MenuList, MenuTiles, SortDown } from 'assets/icons';

import { CircleButton } from 'components/buttons/circle-button';
import { WithIconButton } from 'components/buttons/with-icon-button';
import { SearchInput } from 'components/forms/search-input';

import { TextPlaceholder, ViewVariant } from 'types/enum';

type FilterListProps = {
  view: ViewVariant;
  onToggleView: (type: ViewVariant) => void;
};

export const FilterList: FC<FilterListProps> = ({ view, onToggleView }) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <FilterListContainer>
      <ButtonsContainer $isSearchOpen={isSearchOpen}>
        <SearchInput $isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
        <WithIconButton title={TextPlaceholder.sorting} $isOpen={isSearchOpen} icon={SortDown} />
      </ButtonsContainer>
      <DefaultButtonsContainer $isSearchOpen={isSearchOpen}>
        <CircleButton
          onClick={onToggleView}
          type={ViewVariant.tiles}
          icon={MenuTiles}
          $isActive={view === ViewVariant.tiles}
        />
        <CircleButton
          onClick={onToggleView}
          type={ViewVariant.list}
          icon={MenuList}
          $isActive={view === ViewVariant.list}
        />
      </DefaultButtonsContainer>
    </FilterListContainer>
  );
};
