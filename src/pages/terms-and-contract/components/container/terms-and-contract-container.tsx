import { FC, ReactNode } from 'react';

import { Container, ContentContainer } from './terms-and-contract-container.style';

type contentProps = {
  children?: ReactNode;
};

export const TermsAndContractContainer: FC<contentProps> = ({ children = null }) => (
  <Container>
    <ContentContainer>{children}</ContentContainer>
  </Container>
);
