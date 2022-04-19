import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { LogoConcept } from 'components/LogoConcept';
import { Profile } from 'components/Profile';
import { Skill } from 'components/Skill';
import { Work } from 'components/Work';
import { Contact } from 'components/Contact';
import { Section } from 'components/Section';
import { Sns } from 'components/Sns';
import Seo from 'components/Seo';
import { Top } from 'components/Top';

const ScrollTest = () => {
  const rootStyle = css`
    display: flex;
    flex: 1;
  `;

  const baseStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    perspective: 1px;
    position: fixed;
    background-color: #fbfaf5;
  `;

  const containerStyle = ({ scrollTop }: { scrollTop: number }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    transform-style: preserve-3d;
    transform: translateZ(${Math.ceil(scrollTop / 800)}px);
    transition: transform 1s ease;
  `;

  const scrollRangeStyle = ({
    sectionLength,
    innerHeight,
  }: {
    sectionLength: number;
    innerHeight: number;
  }) => css`
    z-index: -1;
    visibility: hidden;
    height: ${innerHeight + (sectionLength - 1) * 800}px;
  `;

  const footerStyle = css`
    display: flex;
    position: fixed;
    font-size: 0.5rem;
    padding: 0.25rem;
    bottom: 0.5rem;
    left: 0;
    writing-mode: vertical-rl;
  `;

  const [scrollTop, setScrollTop] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  const sectionFns = [
    (index: number) => <Top index={index} />,
    (index: number) => <LogoConcept index={index} />,
    (index: number) => <Profile index={index} />,
    (index: number) => <Skill index={index} />,
    (index: number) => <Work index={index} />,
    (index: number) => <Contact index={index} />,
  ];

  const onScroll = () => {
    const ele = document.scrollingElement ?? document.documentElement;
    setScrollTop(ele.scrollTop);
  };

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    document.addEventListener('scroll', () => {
      onScroll();
    });
    return document.removeEventListener('scroll', () => {
      onScroll();
    });
  }, []);

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
      <div css={rootStyle}>
        <Sns />
        <div css={baseStyle}>
          <div
            css={containerStyle({
              scrollTop,
            })}
          >
            {sectionFns.map((sectionFn, index) => (
              <Section sectionFn={sectionFn} index={index} key={index} />
            ))}
          </div>
        </div>
        <div
          css={scrollRangeStyle({
            innerHeight,
            sectionLength: sectionFns.length,
          })}
        ></div>
        <div css={footerStyle}>&copy;2022 Tomoki Saijo</div>
      </div>
    </>
  );
};

export default ScrollTest;
