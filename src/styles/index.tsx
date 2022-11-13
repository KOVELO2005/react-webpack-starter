import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';

export const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
