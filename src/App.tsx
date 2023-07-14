import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';

import { Router } from 'router';
import { baseTheme } from 'styles/theme';

export const App = () => (
  <ThemeProvider theme={baseTheme}>
    <GlobalStyles />
    <Router />
  </ThemeProvider>
);
