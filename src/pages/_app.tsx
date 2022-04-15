import { Global, css } from '@emotion/react';
import { AppProps } from 'next/app';
import './reset.css';

const globalStyle = css`
  body {
    color: #333;
    font-family: 'Noto Serif JP', serif;
    letter-spacing: 0.1414rem;
    line-height: 1.414rem;
    width: 100vw;
    min-height: 100vh;
    font-size: 0.875rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
