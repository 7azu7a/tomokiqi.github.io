import Link from 'next/link';
import { css } from '@emotion/react';
import { FaInstagramSquare } from 'react-icons/fa';
import React from 'react';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  padding: 10%;
  width: 100%;
  height: 100%;
  @media (max-width: 599px) {
    padding: 2rem;
  }
`;

const contentsStyle = css`
  display: flex;
  width: 100%;
  height: 50%;
`;

const mainContentsStyle = css`
  ${contentsStyle}
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 100%;
`;

const nameStyle = css`
  display: flex;
  justify-content: space-between;
`;

const nameLetterStyle = css`
  font-size: 2rem;
  line-height: 4rem;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 3rem;
  }
  @media (max-width: 599px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const infoContainerStyle = (justifyContent?: string) => css`
  display: flex;
  justify-content: ${justifyContent ?? 'flex-start'};
  width: 100%;
`;

const infoStyle = css`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  color: #999;
  font-family: 'FuturaPTLight', sans-serif;
  @media (max-width: 599px) {
    font-size: 0.7rem;
  }
`;

const subContentsStyle = css`
  ${contentsStyle}
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

const snsIconStyle = css`
  cursor: pointer;
`;

export const FrontSide = () => {
  return (
    <div css={containerStyle}>
      <div css={mainContentsStyle}>
        <div css={infoContainerStyle('flex-end')}>
          <h2 css={infoStyle}>Born in Yokohama, 1992</h2>
        </div>
        <div css={nameStyle}>
          <span css={nameLetterStyle}>T</span>
          <span css={nameLetterStyle}>o</span>
          <span css={nameLetterStyle}>m</span>
          <span css={nameLetterStyle}>o</span>
          <span css={nameLetterStyle}>k</span>
          <span css={nameLetterStyle}>i</span>
          <span css={nameLetterStyle}>&nbsp;</span>
          <span css={nameLetterStyle}>S</span>
          <span css={nameLetterStyle}>A</span>
          <span css={nameLetterStyle}>I</span>
          <span css={nameLetterStyle} className="adjust">
            J
          </span>
          <span css={nameLetterStyle}>O</span>
        </div>
        <div css={infoContainerStyle()}>
          <h2 css={infoStyle}>Web Front-end Engineer</h2>
        </div>
      </div>
      <div css={subContentsStyle}>
        <div css={snsIconStyle}>
          <Link href="https://www.instagram.com/gram____tomo/">
            <a target="_blank">
              <FaInstagramSquare size="2.618rem" color="#333" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
