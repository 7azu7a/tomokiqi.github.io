import { css } from '@emotion/react';
import Link from 'next/link';

const NotFound = () => {
  const rootStyle = css`
    display: flex;
    flex: 1;
  `;

  const baseStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    perspective: 1px;
    position: fixed;
    background-color: #fbfaf5;
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

  return (
    <div css={rootStyle}>
      <div css={baseStyle}>
        <h2>お探しのページは見つかりませんでした。</h2>
        <p>URLが誤っている、もしくはページが消された可能性があります。</p>
        <Link href="/">
          <a>トップページへ戻る</a>
        </Link>
        <div css={footerStyle}>&copy;2022 Tomoki Saijo</div>
      </div>
    </div>
  );
};

export default NotFound;
