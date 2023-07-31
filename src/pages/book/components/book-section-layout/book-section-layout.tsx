import { FC, ReactNode } from 'react';

import { BookSectionTitle } from './book-section-layout.style';

import { SeparatorLine } from 'components/separator-line/separator-line';

type LayoutProps = {
  title: string;
  amount?: number;
  withSeparator?: boolean;
  children: ReactNode;
  paddingOnMobile?: boolean;
};

export const BookSectionLayout: FC<LayoutProps> = ({
  title,
  amount,
  withSeparator = true,
  children,
  paddingOnMobile = false
}) => (
  <div>
    <BookSectionTitle $paddingOnMobile={paddingOnMobile}>
      {title} {amount && <span>{amount}</span>}
    </BookSectionTitle>
    {withSeparator && <SeparatorLine />}
    {children}
  </div>
);
