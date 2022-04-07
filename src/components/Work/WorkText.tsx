import { css } from '@emotion/react';
import { TextBackground } from 'components/TextBackground';
import Image from 'next/image';

export const WorkText = () => {
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
        <div css={spacerStyle} />
        <div css={textWrapperStyle}>
          知人の紹介で写真展のHPを作成しました。LINEで会話しながらUIデザインからサイト制作、文言作成、画像編集まで対応し、大変喜んでいただけました。
        </div>
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={imageWrapperStyle}>
          <Image
            src="/junkfoodgirl.png"
            alt="site screenshot"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div css={spacerStyle} />
      </div>
      <TextBackground />
    </div>
  );
};
