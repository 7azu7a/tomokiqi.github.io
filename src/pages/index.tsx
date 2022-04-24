import { useState } from 'react';
import Image from 'next/image';
import Seo from 'components/Seo';
import { css } from '@emotion/react';
import { FrontSide } from 'components/FrontSide';
import { BackSide } from 'components/BackSide';

const Index = () => {
  const containerStyle = (isReverse: boolean) => css`
    width: 70vw;
    height: calc(70vw / 1.618);
    position: relative;
    transform-style: preserve-3d;
    transform: rotateY(${isReverse ? 180 : 0}deg);
    transition: transform 2s ease-in-out;
    box-shadow: 0.25rem 0.25rem 0.5rem #333;
    border-radius: 1rem;
    @media (max-width: 767px) {
      width: 90vw;
      height: calc(90vw / 1.618);
    }
  `;

  const backgroundStyle = css`
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  `;

  const sideStyle = css`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    border-radius: 1rem;
    background-color: #fff;
    font-family: '游明朝体', 'Yu Mincho', YuMincho, 'ヒラギノ明朝 Pro',
      'Hiragino Mincho Pro', 'MS P明朝', 'MS PMincho', serif;
  `;

  const frontSideStyle = css`
    ${sideStyle}
    z-index: 0;
  `;

  const backSideStyle = css`
    ${sideStyle}
    transform: rotateY(180deg);
    z-index: 0;
  `;

  const contentStyle = css`
    color: #333;
    width: 100%;
    height: 100%;
  `;

  const frontContentStyle = css`
    ${contentStyle}
    transform: translateZ(4rem);
    z-index: 2;
  `;

  const footerStyle = css`
    color: #333;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0.62rem;
    left: 0;
    width: 100%;
    font-size: 0.62rem;
    letter-spacing: 0.09rem;
    font-family: '游明朝体', 'Yu Mincho', YuMincho, 'ヒラギノ明朝 Pro',
      'Hiragino Mincho Pro', 'MS P明朝', 'MS PMincho', serif;
  `;

  const [isReverse, setIsReverse] = useState(false);

  return (
    <>
      <Seo
        pageTitle="Tomoki Saijo | Portfolio"
        pageDescription="紹介制でSTUDIOやJavaScriptによるホームページ制作やWebアプリ開発に協力している西條友喜のポートフォリオです。普段はフロントエンドエンジニアとして活動していますが、WebデザインやCSSアニメーションなどにも興味があります。"
        pagePath="https://portfolio.tomokiqi.com/"
        pageImg="https://portfolio.tomokiqi.com/logo.jpg"
        pageImgHeight={1280}
        pageImgWidth={1280}
      />
      <div css={backgroundStyle}>
        <Image
          src="/background.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          blurDataURL="/background.jpg"
        />
      </div>
      <main
        css={containerStyle(isReverse)}
        onClick={() => setIsReverse(!isReverse)}
      >
        <section css={frontSideStyle}>
          <article css={frontContentStyle}>
            <FrontSide />
          </article>
        </section>
        <section css={backSideStyle}>
          <article css={contentStyle}>
            <BackSide />
          </article>
        </section>
      </main>
      <div css={footerStyle}>&copy;2022 Tomoki Saijo</div>
    </>
  );
};

export default Index;
