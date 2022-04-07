import { Image } from 'stories/Image';
import { css } from '@emotion/react';
import { FadeIn } from './FadeIn';

const billboardContainerStyle = css`
  position: relative;
  width: 100%;
  height: 70vh;
  @media (max-width: 599px) {
    width: 100%;
    height: 70vh;
  }
`;

const billboardStyle = css`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  @media (max-width: 599px) {
    width: 100%;
    height: 100vh;
  }
`;

const billboardCopyStyle = css`
  position: absolute;
  color: white;
  top: 14.14%;
  left: 14.14%;
  writing-mode: vertical-lr;
  font-size: 1.414rem;
  letter-spacing: 0.414rem;
  text-shadow: #333 0.2rem 0 0.4rem;
  @media (max-width: 599px) {
    font-size: 1rem;
  } ;
`;

export const Billboard = () => {
  return (
    <FadeIn delay={800}>
      <section css={billboardContainerStyle}>
        <FadeIn delay={1200}>
          <div css={billboardStyle}>
            <Image src="/kyoto.jpg" alt="kyoto" objectFit="cover" />
          </div>
        </FadeIn>
        <FadeIn delay={1600}>
          <div css={billboardCopyStyle}>モノづくりの国に生まれて</div>
        </FadeIn>
      </section>
    </FadeIn>
  );
};
