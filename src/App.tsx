import { ThemeProvider } from 'styled-components';

import { Layout } from './components/layout';
import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <Layout />
  </ThemeProvider>
);

export default App;
