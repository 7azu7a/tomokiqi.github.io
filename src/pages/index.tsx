import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { LogoConceptTitle } from 'components/LogoConcept/LogoConceptTitle';
import { LogoConceptText } from 'components/LogoConcept/LogoConceptText';
import { ProfileTitle } from 'components/Profile/ProfileTitle';
import { ProfileText } from 'components/Profile/ProfileText';
import { SkillTitle } from 'components/Skill/SkillTitle';
import { SkillText } from 'components/Skill/SkillText';
import { WorkTitle } from 'components/Work/WorkTitle';
import { WorkText } from 'components/Work/WorkText';
import { ContactTitle } from 'components/Contact/ContactTitle';
import { ContactText } from 'components/Contact/ContactText';
import { Section } from 'components/Section';
import { Sns } from 'components/Sns';
import Image from 'next/image';
import Seo from 'components/Seo';

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
  `;

  const backgroundStyle = css`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -9999;
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

  const sections = [
    <LogoConceptTitle />,
    <LogoConceptText />,
    <ProfileTitle />,
    <ProfileText />,
    <SkillTitle />,
    <SkillText />,
    <WorkTitle />,
    <WorkText />,
    <ContactTitle />,
    <ContactText />,
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
          <div css={backgroundStyle}>
            <Image
              src="/paper.png"
              alt="background image"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div
            css={containerStyle({
              scrollTop,
            })}
          >
            {sections.map((section, index) => (
              <Section section={section} index={index} key={index} />
            ))}
          </div>
        </div>
        <div
          css={scrollRangeStyle({
            innerHeight,
            sectionLength: sections.length,
          })}
        ></div>
        <div css={footerStyle}>&copy;2022 Tomoki Saijo</div>
      </div>
    </>
  );
};

export default ScrollTest;
