import { css } from '@emotion/react';
import { Header } from 'stories/Header';
import { Image } from 'stories/Image';
import { Paragraph } from 'stories/Paragraph';
import { useInView } from 'react-intersection-observer';

type SectionContainerStyleProps = {
  coverImagePos?: 'left' | 'right';
  inView?: boolean;
};

const sectionContainerStyle = ({
  coverImagePos = 'left',
}: SectionContainerStyleProps) => css`
  display: flex;
  flex-direction: ${coverImagePos === 'left' ? 'row' : 'row-reverse'};
  justify-content: center;
  width: 70%;
  margin: 6rem auto;
  background-color: white;
  @media (max-width: 599px) {
    flex-direction: column;
  }
  @media (max-width: 959px) {
    width: 90%;
  }
`;

const coverImageStyle = ({
  coverImagePos = 'left',
  inView = false,
}: SectionContainerStyleProps) =>
  css`
    width: 272px;
    height: 384px;
    min-width: 272px;
    min-height: 384px;
    margin-left: ${coverImagePos === 'left' ? '0rem' : '2rem'};
    margin-right: ${coverImagePos === 'right' ? '0rem' : '2rem'};
    @media (max-width: 599px) {
      width: 181px;
      height: 256px;
      min-width: 181px;
      min-height: 256px;
      margin-left: ${coverImagePos === 'left' ? '0rem' : 'auto'};
      margin-right: ${coverImagePos === 'right' ? '0rem' : 'auto'};
    }
    transition: opacity 1.2s, transform 1.2s;
    transform: ${inView
      ? 'translateY(0rem)'
      : coverImagePos === 'left'
      ? 'translateX(-8rem)'
      : 'translateX(8rem)'};
    opacity: ${inView ? 1 : 0};
  `;

const sectionContentsStyle = ({ inView }: SectionContainerStyleProps) =>
  css`
    width: 100%;
    transition: opacity 1.2s, transform 1.2s;
    transform: ${inView ? 'translateY(0rem)' : 'translateY(8rem)'};
    opacity: ${inView ? 1 : 0};
  `;

const sectionTitleStyle = ({ coverImagePos }: SectionContainerStyleProps) =>
  css`
    margin-bottom: 2rem;
    text-align: ${coverImagePos === 'right' ? 'left' : 'right'};
  `;

const sectionHeaderStyle = css`
  margin-bottom: 1rem;
`;

const sectionTextStyle = css`
  line-height: 1.618rem;
`;

interface SectionContainerProps {
  id: string;
  number: number;
  title: string;
  header: string;
  text: string;
  coverImageSrc?: string;
  coverImageAlt?: string;
  coverImagePos?: 'left' | 'right';
}

export const SectionContainer: React.VFC<SectionContainerProps> = ({
  id,
  number,
  title,
  header,
  text,
  coverImageSrc,
  coverImageAlt,
  coverImagePos = 'left',
}) => {
  const { ref, inView } = useInView({
    rootMargin: '-64px',
    triggerOnce: true,
  });

  return (
    <section id={id} css={sectionContainerStyle({ coverImagePos })} ref={ref}>
      {coverImageSrc && coverImageAlt && (
        <div css={coverImageStyle({ coverImagePos, inView })}>
          <Image src={coverImageSrc} alt={coverImageAlt} objectFit="cover" />
        </div>
      )}
      <div css={sectionContentsStyle({ inView })}>
        <div css={sectionTitleStyle({ coverImagePos })}>
          {`#${('000' + number).slice(-3)}`}&nbsp;
          <hr />
          <Header text={title} isPrimary={false} />
        </div>
        <div css={sectionHeaderStyle}>
          <Header text={header} />
        </div>
        <div css={sectionTextStyle}>
          <Paragraph text={text} />
        </div>
      </div>
    </section>
  );
};
