import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return windowSize;
};
