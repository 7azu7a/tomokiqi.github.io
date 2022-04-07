import { css } from '@emotion/react';
import { Footer } from 'components/Footer';
import Link from 'next/link';
import { Header } from 'stories/Header';
import { Image } from 'stories/Image';
import { Paragraph } from 'stories/Paragraph';

const notFoundContainerStyle = css`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const notFoundMessageStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  color: white;
  gap: 1rem;
`;

const anchorStyle = css`
  color: #89c3eb;
  cursor: pointer;
`;

const footerContainerStyle = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 9999;
`;

const NotFound = () => {
  return (
    <div css={notFoundContainerStyle}>
      <div css={notFoundMessageStyle}>
        <Header text="お探しのページは見つかりませんでした" isPrimary={false} />
        <Paragraph text="URLが誤っている、もしくはページが消された可能性があります。" />
        <Link href="/">
          <a css={anchorStyle}>トップページへ戻る</a>
        </Link>
      </div>
      <Image src="/kyoto-404.jpg" alt="logo" objectFit="cover" />
      <div css={footerContainerStyle}>
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
