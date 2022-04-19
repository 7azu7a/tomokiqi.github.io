import { useState, useEffect } from 'react';

export const useInView = (index: number) => {
  const [inView, setInView] = useState(false);

  const onScroll = () => {
    const ele = document.scrollingElement ?? document.documentElement;
    const flagNum = ele.scrollTop / 400;
    if (index * 2 - 2 < flagNum && flagNum <= index * 4) {
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

  return [inView];
};
