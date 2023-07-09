import { Footer } from './components/footer';
import { Header } from './components/header';

import { Container } from './layout.style';

import { mockUser } from 'mocks/user.mock';

export const Layout = () => (
  <Container>
    <Header user={mockUser} />
    <Footer />
  </Container>
);
