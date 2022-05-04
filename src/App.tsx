import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/GlobalStyles';
import { Widget } from './components';
import dark from './themes/dark';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Widget />
    </ThemeProvider>
  );
}
