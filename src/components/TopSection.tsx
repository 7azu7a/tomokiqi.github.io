import { css } from '@emotion/react';
import { Image } from 'stories/Image';
import { Header } from 'stories/Header';
import { siteContents } from 'constant/contents';
import Link from 'next/link';
import { FadeIn } from './FadeIn';

const topSectionStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 4rem;
  background-color: white;
  z-index: 2;
  background-image: url('/paper.png');
  background-size: cover;
  @media (max-width: 599px) {
    padding-top: 2rem;
  }
`;

const menuStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 4rem 0;
  gap: 2rem;
  writing-mode: vertical-rl;
  @media (max-width: 599px) {
    gap: 1rem;
  }
`;

const menuItemStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const menuItemHeaderEnStyle = css`
  font-size: 0.7rem;
`;

export const TopSection = () => {
  return (
    <section css={topSectionStyle} id="top">
      <FadeIn delay={0}>
        <Image
          src="/logo.svg"
          alt="logo"
          objectFit="contain"
          width="5rem"
          height="3rem"
        />
      </FadeIn>
      <FadeIn delay={400}>
        <div css={menuStyle}>
          {siteContents.map((content) => (
            <Link href={`/#${content.id}`} key={content.id}>
              <div css={menuItemStyle}>
                <Header text={content.title} isPrimary={false} />
                <span css={menuItemHeaderEnStyle}>{content.titleEn}</span>
              </div>
            </Link>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};
