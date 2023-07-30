import React, { FC } from 'react';

import { TitleContainer, InfoContainer } from './details-row.style';

type DetailsRowProps = {
  title: string;
  content: string | number;
  hideOnTablet?: boolean;
  showOnlyOnMobile?: boolean;
};

export const DetailsRow: FC<DetailsRowProps> = ({ title, content, hideOnTablet = false, showOnlyOnMobile = false }) => (
  <React.Fragment>
    <TitleContainer $hideOnTablet={hideOnTablet} $showOnlyOnMobile={showOnlyOnMobile}>
      {title}
    </TitleContainer>
    <InfoContainer $hideOnTablet={hideOnTablet} $showOnlyOnMobile={showOnlyOnMobile}>
      {content}
    </InfoContainer>
  </React.Fragment>
);
