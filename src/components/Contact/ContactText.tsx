import { css } from '@emotion/react';
import { TextBackground } from 'components/TextBackground';

export const ContactText = () => {
  const containerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;
  const textWrapperStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: min(45vw, 45vh);
    height: min(45vw, 45vh);
  `;

  return (
    <div css={containerStyle}>
      <div css={textWrapperStyle}>
        サイト制作のご相談などはインスタグラム、カジュアル面談のお誘いなどはウォンテッドリーにてご連絡ください。
      </div>
      <TextBackground />
    </div>
  );
};
