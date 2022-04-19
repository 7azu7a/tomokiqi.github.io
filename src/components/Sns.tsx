import { css } from '@emotion/react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagramSquare, FaGithub } from 'react-icons/fa';

export const Sns = () => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    width: 48px;
    height: 100%;
    position: fixed;
    gap: 8px;
    top: 4vw;
    right: 8vw;
    z-index: 1;
    @media (max-width: 599px) {
      top: 16px;
      right: 16px;
    }
  `;

  const snsIconStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: #333;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    &:before {
      content: '';
      width: 1px;
      height: 100vh;
      background-color: #333;
      position: absolute;
      right: 24px;
      bottom: 0;
      z-index: -1;
    }
  `;

  return (
    <div css={containerStyle}>
      <div css={snsIconStyle} className=".ig">
        <Link href="https://www.instagram.com/gram____tomo/">
          <a target="_blank">
            <FaInstagramSquare size="2rem" color="#fff" />
          </a>
        </Link>
      </div>
      {/* <div css={snsIconStyle}> */}
      <Link href="https://www.wantedly.com/id/tsaijo">
        <a target="_blank">
          <div css={snsIconStyle}>
            <Image
              src="/Wantedly_Mark_Wht.svg"
              alt="wantedly logo"
              objectFit="contain"
              layout="fill"
              placeholder="blur"
              blurDataURL="/Wantedly_Mark_Wht.svg"
            />
          </div>
        </a>
      </Link>
      {/* </div> */}
      <div css={snsIconStyle}>
        <Link href="https://github.com/tomokiqi">
          <a target="_blank">
            <FaGithub size="2rem" color="#fff" />
          </a>
        </Link>
      </div>
    </div>
  );
};
