import { css } from '@emotion/react';
import { TopSection } from 'components/TopSection';
import { Billboard } from 'components/Billboard';
import { SectionContainer } from 'components/SectionContainer';
import { Footer } from 'components/Footer';
import { siteContents } from 'constant/contents';
import { ScrollToTopButton } from 'components/ScrollToTopButton';
import Seo from 'components/Seo';

const mainContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

const mainStyle = css`
  background-color: white;
  width: 100%;
  z-index: 2;
`;

const Index = () => {
  return (
    <>
      <Seo
        pageTitle="Portfolio｜Tomoki Saijo"
        pageDescription="Tomoki Saijo's portfolio."
        pagePath="https://portfolio.tomokiqi.com/"
        pageImg="https://portfolio.tomokiqi.com/kyoto.jpg"
        pageImgWidth={1280}
        pageImgHeight={1280}
      />
      <div css={mainContainerStyle}>
        <TopSection />
        <Billboard />
        <main css={mainStyle}>
          {siteContents.map((contents, index) => {
            return (
              <SectionContainer
                id={contents.id}
                number={index + 1}
                title={contents.title}
                header={contents.contents.header}
                text={contents.contents.text}
                coverImageSrc={contents.imageSrc}
                coverImageAlt={contents.imageAlt}
                coverImagePos={index % 2 ? 'left' : 'right'}
                key={contents.id}
              />
            );
          })}
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Index;
