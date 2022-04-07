import { css } from '@emotion/react';
import Image from 'next/image';

export const ContactTitle = () => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  `;

  const headerStyle = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    writing-mode: vertical-rl;
    margin: 0;
  `;

  const imageWrapperStyle = css`
    flex: 1;
    width: 9rem;
    height: 9rem;
    position: relative;
  `;

  return (
    <div css={containerStyle}>
      <div css={imageWrapperStyle}>
        <Image
          src="/choju_kitsune.svg"
          alt="monkey image"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <h3 css={headerStyle}>お問い合わせ</h3>
    </div>
  );
};
