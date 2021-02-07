import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ReactPropTypes } from 'react';
import theme from '../src/utils/theme';

interface IApp {
  pageProps: ReactPropTypes;
  Component: any;
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    color: ${theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  input, button {
    outline: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default function App({ Component, pageProps }: IApp) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
