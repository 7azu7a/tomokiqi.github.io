import { css } from '@emotion/react';
import Image from 'next/image';

type TopProps = {
  index?: number;
};

export const Top: React.VFC<TopProps> = () => {
  const containerStyle = css`
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  `;

  const titleStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.618rem;
    width: 100%;
    height: 50%;
  `;

  const logoStyle = css`
    position: relative;
    width: 100%;
    height: 2.618rem;
    box-sizing: 0 0 4px black;
  `;

  const headerStyle = css`
    writing-mode: vertical-rl;
  `;

  return (
    <div css={containerStyle}>
      <div css={titleStyle}>
        <div css={logoStyle}>
          <Image
            src="/logo.svg"
            alt="logo"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL="/logo.svg"
          />
        </div>
        <h1 css={headerStyle}>創る喜び</h1>
      </div>
    </div>
  );
};
