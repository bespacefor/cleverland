import { FC, ReactNode, useCallback, useMemo, useState } from 'react';

import { BookSectionTitle } from './book-section-layout.style';

import { Up, Down } from 'assets/icons';
import { SeparatorLine } from 'components/separator-line/separator-line';

type BookSectionLayoutProps = {
  title: string;
  amount?: number;
  showSeparator?: boolean;
  children: ReactNode;
  paddingOnMobile?: boolean;
  showArrow?: boolean;
};

export const BookSectionLayout: FC<BookSectionLayoutProps> = ({
  title,
  amount,
  showSeparator = true,
  children,
  paddingOnMobile = false,
  showArrow = false
}) => {
  const [isSectionOpen, setIsSectionOpen] = useState<boolean>(true);
  const ArrowIcon = useMemo(() => (isSectionOpen ? Up : Down), [isSectionOpen]);

  const toggleSection = useCallback(() => {
    if (showArrow) {
      setIsSectionOpen(!isSectionOpen);
    }
  }, [isSectionOpen, showArrow]);

  return (
    <div>
      <BookSectionTitle $paddingOnMobile={paddingOnMobile} onClick={toggleSection}>
        {title} <span>{amount}</span> {showArrow && <ArrowIcon />}
      </BookSectionTitle>
      {showSeparator && <SeparatorLine />}
      {isSectionOpen && children}
    </div>
  );
};
