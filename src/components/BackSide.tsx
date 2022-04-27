import { css, keyframes } from '@emotion/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';

export const BackSide = () => {
  const contents = [
    { image: 'front-end.png', title: 'Front End Development' },
    { image: 'home-page.png', title: 'Home Page Creation' },
    { image: 'ui-design.png', title: 'Web UI Design' },
  ];

  const containerStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-shadow: 0rem 0rem 0.25rem #333;
  `;

  const slideshow = keyframes`
    0%{
      opacity: 0;
    }
    13%{
      opacity: 1;
    }
    28%{
      opacity: 1
    }
    38%{
      opacity: 0;
    }
    100%{
      opacity: 0;
    }
  `;

  const DISPLAY_TIME = 5;

  const imageStyle = (index: number) => css`
    position: absolute;
    border-radius: 1rem;
    overflow: hidden;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${slideshow} ${DISPLAY_TIME * contents.length}s linear infinite;
    animation-delay: ${index * DISPLAY_TIME}s;
  `;

  const descriptionStyle = (index: number) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: ${slideshow} ${DISPLAY_TIME * contents.length}s linear infinite;
    animation-delay: ${index * DISPLAY_TIME}s;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
  `;

  const numberWrapperStyle = css`
    width: 30%;
    padding-top: 30%;
    position: relative;
    display: flex;
    justify-content: center;
  `;

  const currentNumberStyle = (containerWidth: number) => css`
    font-size: ${containerWidth * 0.3 * 0.3}px;
    position: absolute;
    top: 0;
  `;

  const totalNumberStyle = (containerWidth: number) => css`
    font-size: ${containerWidth * 0.3 * 0.3}px;
    position: absolute;
    bottom: 0;
    &:before {
      top: -${containerWidth * 0.3 * 0.05}px;
      content: '';
      width: 100%;
      height: 1px;
      background-color: white;
      position: absolute;
      box-shadow: 0rem 0rem 0.25rem #333;
    }
  `;

  const titleStyle = css`
    width: 70%;
    font-size: 1rem;
    letter-spacing: 0.25rem;
    color: #fff;
    @media (max-width: 599px) {
      letter-spacing: 0.1rem;
    }
  `;

  const ref = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ x: 0, y: 0 });
  const { width, height } = useWindowSize();

  useEffect(() => {
    setContainerSize({
      x: ref.current?.clientWidth ?? 0,
      y: ref.current?.clientHeight ?? 0,
    });
  }, [width, height]);

  return (
    <div css={containerStyle} ref={ref}>
      {contents.map((content, index) => (
        <div css={imageStyle(index)} key={`image-${index}`}>
          <Image
            src={`/${content.image}`}
            alt={content.image}
            layout="responsive"
            objectFit="cover"
            width={`${containerSize.x}px`}
            height={`${containerSize.y}px;`}
            priority={!index}
          />
        </div>
      ))}
      {contents.map((content, index) => (
        <div css={descriptionStyle(index)} key={`title-${index}`}>
          <div css={numberWrapperStyle}>
            <div css={currentNumberStyle(containerSize.x)}>
              {`00${index + 1}`.slice(-2)}
            </div>
            <div css={totalNumberStyle(containerSize.x)}>
              {`00${contents.length}`.slice(-2)}
            </div>
          </div>
          <div css={titleStyle}>{content.title}</div>
        </div>
      ))}
    </div>
  );
};
