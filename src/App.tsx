import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import { Layout } from 'components/layout';
import { baseTheme } from 'styles/theme';

const App = () => (
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <Layout />
  </ThemeProvider>
);

export default App;
