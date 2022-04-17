import { css } from '@emotion/react';

export const TextBackground = () => {
  const textBackgroundStyle = css`
    width: min(100vw, 100vh);
    height: min(100vw, 100vh);
    z-index: -1;
    position: absolute;
    transform: rotate(45deg);
    background-color: #fff;
    background-image: radial-gradient(
        closest-side,
        transparent 99%,
        #f8fbf8 99%
      ),
      radial-gradient(closest-side, transparent 99%, #f8fbf8 99%);
    background-size: 16rem 16rem;
    background-position: 4rem 0rem, 12rem 8rem;
    background-repeat: repeat;
  `;

  return <div css={textBackgroundStyle} />;
};
