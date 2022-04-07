import { css } from '@emotion/react';
import Image from 'next/image';

export const SkillTitle = () => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  `;

  const headerStyle = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    writing-mode: vertical-rl;
    margin: 0;
  `;

  const imageWrapperStyle = css`
    flex: 1;
    width: 15rem;
    height: 9rem;
    transform: translateY(-14%);

    position: relative;
  `;

  return (
    <div css={containerStyle}>
      <h3 css={headerStyle}>力になれること</h3>
      <div css={imageWrapperStyle}>
        <Image
          src="/choju_working.svg"
          alt="monkey image"
          objectFit="contain"
          layout="fill"
        />
      </div>
    </div>
  );
};
