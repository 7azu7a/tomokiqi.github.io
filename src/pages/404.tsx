import { css } from '@emotion/react';
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
  color: #a0d8ef;
  text-decoration: underline;
  cursor: pointer;
`;

const footerStyle = css`
  color: white;
  z-index: 2;
  display: flex;
  position: fixed;
  font-size: 0.5rem;
  padding: 0.25rem;
  bottom: 0.5rem;
  left: 0;
  writing-mode: vertical-rl;
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
      <Image src="/paper.png" alt="logo" objectFit="cover" />
      <div css={footerStyle}>&copy;2022 Tomoki Saijo</div>
    </div>
  );
};

export default NotFound;
