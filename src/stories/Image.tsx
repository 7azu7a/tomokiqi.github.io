import NextImage from 'next/image';
import { css } from '@emotion/react';

interface DivStyleProps {
  width: string;
  height: string;
}

const divStyle = ({ width, height }: DivStyleProps) =>
  css`
    width: ${width};
    height: ${height};
    position: relative;
  `;

interface ImageProps {
  objectFit?: 'cover' | 'contain' | 'fill';
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

export const Image: React.VFC<ImageProps> = ({
  objectFit = 'cover',
  width = '100%',
  height = '100%',
  src,
  alt,
}) => {
  return (
    <div css={divStyle({ width, height })}>
      <NextImage
        src={src}
        alt={alt}
        objectFit={objectFit}
        layout="fill"
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  );
};
