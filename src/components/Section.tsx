import { useRef, useState, useEffect } from 'react';
import { css } from '@emotion/react';

type SectionProps = {
  index: number;
  section: JSX.Element;
};

export const Section: React.VFC<SectionProps> = ({ index, section }) => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  const sectionStyle = ({
    index,
    inView,
  }: {
    index: number;
    inView: boolean;
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    transform: translateZ(-${index}px);
    position: absolute;
    transition: opacity 1s ease;
    opacity: ${inView ? 1 : 0};
  `;

  const onScroll = () => {
    const ele = document.scrollingElement ?? document.documentElement;
    const flagNum = ele.scrollTop / 400;
    if (index * 2 - 2 < flagNum && flagNum <= index * 2) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    if (index === 0) setInView(true);
    document.addEventListener('scroll', () => {
      onScroll();
    });
  }, []);

  return (
    <section css={sectionStyle({ index, inView })} key={index} ref={ref}>
      {section}
    </section>
  );
};
