import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import App from '@/App';
import theme from '@/styles/theme';
import { GlobalStyle } from '@/styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
);
