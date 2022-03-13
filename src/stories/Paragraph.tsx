import { css } from '@emotion/react';

interface ParagraphProps {
  text: string;
}

const pStyle = css`
  text-align: justify;
  font-size: 0.875em;
`;

export const Paragraph: React.VFC<ParagraphProps> = ({ text }) => {
  return <div css={pStyle}>{text}</div>;
};
