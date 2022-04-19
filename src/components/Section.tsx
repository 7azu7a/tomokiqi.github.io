import { css } from '@emotion/react';

type SectionProps = {
  index: number;
  sectionFn: (index: number) => JSX.Element;
};

export const Section: React.VFC<SectionProps> = ({ index, sectionFn }) => {
  const sectionStyle = ({ index }: { index: number }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    transform: translateZ(-${index}px);
    position: absolute;
  `;

  return (
    <section css={sectionStyle({ index })} key={index}>
      {sectionFn(index)}
    </section>
  );
};
