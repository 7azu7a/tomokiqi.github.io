import { css } from '@emotion/react';
import { TextBackground } from 'components/TextBackground';
import Image from 'next/image';

export const SkillText = () => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
  `;

  const imageWrapperStyle = css`
    width: min(45vw, 45vh);
    height: min(45vw, 45vh);
    position: relative;
  `;

  const textWrapperStyle = css`
    display: flex;
    align-items: flex-end;
    width: min(45vw, 45vh);
    height: min(45vw, 45vh);
    padding: 0.5rem;
    text-align: justify;
  `;

  const spacerStyle = css`
    width: min(45vw, 45vh);
    height: min(45vw, 45vh);
  `;

  return (
    <div css={containerStyle}>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={textWrapperStyle}>
          HP作成やWebアプリ開発など。ノーコードツールからJavaScriptまで広く扱い、皆様が想いを込めたビジネスやアートなどを世に出すお手伝いをします。
        </div>
        <div css={spacerStyle} />
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={spacerStyle} />
        <div css={imageWrapperStyle}>
          <Image
            src="/hhkb.jpg"
            alt="keyboard photo"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <TextBackground />
    </div>
  );
};
