import { FC } from 'react';

import { BreadcrumbsContainer, BreadcrumbsContent } from './breadcrumbs.style';

import { Wrapper } from 'styles/wrapper';

export const Breadcrumbs: FC = () => (
  <BreadcrumbsContainer>
    <Wrapper>
      <BreadcrumbsContent>
        <p>
          <span>Бизнес книги</span>
          <span>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</span>
        </p>
      </BreadcrumbsContent>
    </Wrapper>
  </BreadcrumbsContainer>
);
