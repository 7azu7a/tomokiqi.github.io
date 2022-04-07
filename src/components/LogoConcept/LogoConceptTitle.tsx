import { css } from '@emotion/react';
import Image from 'next/image';

export const LogoConceptTitle = () => {
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  const titleStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
  `;

  const logoWrapperStyle = css`
    width: 5rem;
    height: 3rem;
    position: relative;
  `;

  const headerStyle = css`
    writing-mode: vertical-rl;
    margin: 2rem 0 0;
  `;

  const imageWrapperStyle = css`
    display: flex;
    flex: 1;
    width: 70%;
    height: 70%;
    transform: translateY(-14%);
    position: relative;
  `;

  return (
    <div css={containerStyle}>
      <div css={titleStyle}>
        <div css={logoWrapperStyle}>
          <Image
            src="/logo.svg"
            alt="logo"
            objectFit="contain"
            layout="fill"
            placeholder="blur"
            blurDataURL="/logo.svg"
          />
        </div>
        <h2 css={headerStyle}>創る喜び</h2>
      </div>
      <div css={imageWrapperStyle}>
        <Image
          src="/choju_running.svg"
          alt="logo"
          objectFit="contain"
          layout="fill"
          placeholder="blur"
          blurDataURL="/choju_running.svg"
        />
      </div>
    </div>
  );
};
