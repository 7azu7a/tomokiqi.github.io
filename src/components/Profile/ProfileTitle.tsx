import { css } from '@emotion/react';
import Image from 'next/image';

export const ProfileTitle = () => {
  const containerStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  `;

  const imageWrapperStyle = css`
    width: 15rem;
    height: 9rem;
    position: relative;
  `;

  const headerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    margin: 0;
  `;

  return (
    <div css={containerStyle}>
      <div css={imageWrapperStyle}>
        <Image
          src="/choju_saru.svg"
          alt="monkey image"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <h2 css={headerStyle}>私は誰</h2>
    </div>
  );
};
