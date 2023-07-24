import { FC } from 'react';

import { ButtonsContainer, DefaultButtonsContainer, FilterListContainer } from './filter-list.style';

import { MenuList, MenuTiles, Search, SortDown } from 'assets/icons';

import { CircleButton } from 'components/buttons/circle-button';
import { WithIconButton } from 'components/buttons/with-icon-button';
import { SearchInput } from 'components/forms/search-input';

import { TextPlaceholder, ViewVariant } from 'types/enum';

type FilterListProps = {
  typeView: ViewVariant;
  onToggleView: (type: ViewVariant) => void;
};

export const FilterList: FC<FilterListProps> = ({ typeView, onToggleView }) => (
  <FilterListContainer>
    <ButtonsContainer $isVisibleMobile={false}>
      <SearchInput />
      <WithIconButton title={TextPlaceholder.sorting} icon={SortDown} />
    </ButtonsContainer>
    <ButtonsContainer $isVisibleMobile={true}>
      <CircleButton type={ViewVariant.search} icon={Search} onClick={() => {}} $isActive={false} />
      <CircleButton type={ViewVariant.sortDown} icon={SortDown} onClick={() => {}} $isActive={false} />
    </ButtonsContainer>
    <DefaultButtonsContainer>
      <CircleButton
        onClick={onToggleView}
        type={ViewVariant.tiles}
        icon={MenuTiles}
        $isActive={typeView === ViewVariant.tiles}
      />
      <CircleButton
        onClick={onToggleView}
        type={ViewVariant.list}
        icon={MenuList}
        $isActive={typeView === ViewVariant.list}
      />
    </DefaultButtonsContainer>
  </FilterListContainer>
);
