import { css } from '@emotion/react';
import { TextBackground } from 'components/TextBackground';
import Image from 'next/image';

export const ProfileText = () => {
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
        <div css={imageWrapperStyle}>
          <Image
            src="/profile.png"
            alt="developer photo"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={textWrapperStyle}>
          西條友喜。1992年、神奈川県横浜市出身。フロントエンドエンジニア。趣味はイタリアン料理など。アクアパッツァをセミドライトマトから作ります。
        </div>
        <div css={spacerStyle} />
      </div>
      <TextBackground />
    </div>
  );
};
