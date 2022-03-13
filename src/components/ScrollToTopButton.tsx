import Link from 'next/link';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { css } from '@emotion/react';

const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #00000080;
  position: fixed;
  bottom: 4rem;
  right: 8rem;
  z-index: 9999;
  cursor: pointer;
  @media (max-width: 599px) {
    bottom: 2rem;
    right: 2rem;
  } ;
`;

export const ScrollToTopButton = () => {
  return (
    <Link href="/#top" scroll={false}>
      <div css={buttonStyle}>
        <FaAngleDoubleUp color="white" size="1.414rem" />
      </div>
    </Link>
  );
};
