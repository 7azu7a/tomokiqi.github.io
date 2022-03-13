import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

const fadeInStyle = ({
  onView,
  delay = 0,
  duration = 1200,
}: { onView: boolean } & Omit<FadeInProps, 'children'>) =>
  css`
    display: flex;
    justify-content: center;
    width: '100%';
    height: inherit;
    opacity: ${onView ? 1 : 0};
    transition-delay: ${delay / 1000}s;
    transition-duration: ${duration / 1000}s;
    transition-property: opacity;
  `;

interface FadeInProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

export const FadeIn: React.VFC<FadeInProps> = ({
  delay,
  duration,
  children,
}) => {
  const [onView, setOnView] = useState(false);

  useEffect(() => setOnView(true), []);

  return <div css={fadeInStyle({ onView, delay, duration })}>{children}</div>;
};
