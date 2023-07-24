import { ListBookImage, ListContent, ListCard } from './list-card.style';
import { TileBookImage, TileContent, TileCard } from './tile-card.styles';

import { ViewVariant } from 'types/enum';

export const getStyledComponentForBookCard = (view: ViewVariant) =>
  view === ViewVariant.tiles
    ? { card: TileCard, content: TileContent, image: TileBookImage }
    : { card: ListCard, content: ListContent, image: ListBookImage };
