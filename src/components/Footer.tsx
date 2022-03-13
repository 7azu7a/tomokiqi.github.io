import { css } from '@emotion/react';
import { FaInstagramSquare, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const footerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  background-color: #333;
`;

const snsIconContainerStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const snsIconStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const copyrightStyle = css`
  color: white;
  font-size: 0.7em;
`;

export const Footer = () => (
  <section css={footerStyle}>
    <div css={snsIconContainerStyle}>
      <div css={snsIconStyle}>
        <Link href="https://www.instagram.com/gram____tomo/">
          <a target="_blank">
            <FaInstagramSquare size="2rem" color="white" />
          </a>
        </Link>
      </div>
      <div css={snsIconStyle}>
        <Link href="https://www.wantedly.com/id/tsaijo">
          <a target="_blank">
            <Image
              src="/Wantedly_Mark_Wht.svg"
              alt="wantedly logo"
              width="48px"
              height="48px"
            />
          </a>
        </Link>
      </div>
      <div css={snsIconStyle}>
        <Link href="https://github.com/tomokiqi">
          <a target="_blank">
            <FaGithub size="2rem" color="white" />
          </a>
        </Link>
      </div>
    </div>
    <div css={copyrightStyle}>&copy;2022 Tomoki Saijo</div>
  </section>
);
