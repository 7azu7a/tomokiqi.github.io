import { useState } from 'react';
import { css } from '@emotion/react';
import { FrontSide } from 'components/FrontSide';
import { BackSide } from 'components/BackSide';
import Layout from 'components/Layout';

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
    @media (max-width: 599px) {
      width: 90vw;
      height: calc(90vw / 1.618);
    }
  `;

  const sideStyle = css`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    border-radius: 1rem;
    background-color: #fff;
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
    width: 100%;
    height: 100%;
  `;

  const frontContentStyle = css`
    ${contentStyle}
    transform: translateZ(4rem);
    z-index: 2;
  `;

  const [isReverse, setIsReverse] = useState(false);

  return (
    <Layout
      pageTitle="Tomoki Saijo ｜ Portfolio"
      pageDescription="紹介制でSTUDIOやJavaScriptによるホームページ制作やWebアプリ開発に協力している西條友喜のポートフォリオです。普段はフロントエンドエンジニアとして活動していますが、WebデザインやCSSアニメーションなどにも興味があります。"
      pagePath="https://portfolio.tomokiqi.com/"
      pageImg="https://portfolio.tomokiqi.com/logo.jpg"
    >
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
    </Layout>
  );
};

export default Index;
