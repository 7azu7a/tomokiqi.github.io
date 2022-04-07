import { css } from '@emotion/react';

interface HeaderProps {
  isPrimary?: boolean;
  text: string;
}

const primaryHeaderStyle = css`
  font-size: 1.2828rem;
  font-weight: bold;
`;

const secondaryHeaderStyle = css`
  font-size: 1rem;
  font-weight: bold;
`;

export const Header: React.VFC<HeaderProps> = ({ isPrimary = true, text }) => {
  return isPrimary ? (
    <div css={primaryHeaderStyle}>{text}</div>
  ) : (
    <div css={secondaryHeaderStyle}>{text} </div>
  );
};
