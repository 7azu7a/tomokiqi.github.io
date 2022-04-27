import Image from 'next/image';
import Seo from 'components/Seo';
import { css } from '@emotion/react';

type LayoutProps = {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
  pagePath: string;
  pageImg: string;
};

const Layout: React.VFC<LayoutProps> = ({
  children,
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
}) => {
  const backgroundStyle = css`
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  `;

  const footerStyle = css`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0.5rem;
    left: 0rem;
    width: 100%;
    font-size: 0.5rem;
    letter-spacing: 0.1rem;
    font-family: 'FuturaPTLight', sans-serif;
  `;

  return (
    <>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pagePath={pagePath}
        pageImg={pageImg}
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
          quality={80}
        />
      </div>
      {children}
      <div css={footerStyle}>&copy;2022 Tomoki Saijo</div>
    </>
  );
};

export default Layout;
