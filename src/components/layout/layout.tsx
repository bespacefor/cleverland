import { Footer } from './components/footer';
import Header from './components/header/header';
import { Container } from './layout.style';

import { mockUser } from '../../mocks/user.mock';

const Layout = () => (
  <Container>
    <Header user={mockUser} />
    <Footer />
  </Container>
);

export default Layout;
