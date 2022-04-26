import Image from 'next/image';
import Seo from 'components/Seo';
import { css } from '@emotion/react';

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
  pagePath: string;
};

const Layout: React.VFC<LayoutProps> = ({
  children,
  pageTitle,
  pageDescription,
  pagePath,
}) => {
  const backgroundStyle = css`
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  `;

  const footerStyle = css`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    width: 100%;
    font-size: 0.5rem;
    letter-spacing: 0.1rem;
    font-family: 'FuturaPTLight';
  `;

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pagePath={pagePath}
        pageImg="https://portfolio.tomokiqi.com/logo.jpg"
        pageImgHeight={1280}
        pageImgWidth={1280}
      />
      <div css={backgroundStyle}>
        <Image
          src="/background.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          blurDataURL="/background.jpg"
          quality={100}
        />
      </div>
      {children}
      <div css={footerStyle}>&copy;2022 Tomoki Saijo</div>
    </>
  );
};

export default Layout;
