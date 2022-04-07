import { css } from '@emotion/react';
import { TextBackground } from 'components/TextBackground';
import Image from 'next/image';

export const LogoConceptText = () => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
  `;

  const minWHStyle = css`
    width: min(45vw, 45vh);
    height: min(45vw, 45vh);
  `;

  const imageWrapperStyle = css`
    ${minWHStyle}
    position: relative;
  `;

  const textWrapperStyle = css`
    ${minWHStyle}
    padding: 0.5rem;
    text-align: justify;
  `;

  const spacerStyle = css`
    ${minWHStyle}
  `;

  return (
    <div css={containerStyle}>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={imageWrapperStyle}>
          <Image src="/logo.jpg" alt="logo" objectFit="contain" layout="fill" />
        </div>
        <div css={spacerStyle} />
      </div>
      <div
        css={css`
          display: flex;
        `}
      >
        <div css={spacerStyle} />
        <div css={textWrapperStyle}>
          ロゴは「喜」の草書体「㐂」をモチーフに、日本の歴史的建造物と馴染み深い白銀比を織り込み作成しました。喜びが多く美しいモノづくりに努めて参ります。
        </div>
      </div>
      <TextBackground />
    </div>
  );
};
