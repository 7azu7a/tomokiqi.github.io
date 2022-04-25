import { Global, css } from '@emotion/react';
import { AppProps } from 'next/app';
import './reset.css';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1024px;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
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
