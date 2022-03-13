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
  }
`;

const rootStyle = css`
  overflow: hidden;
  width: 100%;
  min-height: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <div css={rootStyle}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
