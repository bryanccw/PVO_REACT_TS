import { useState, useLayoutEffect, createContext, useContext, ReactNode } from 'react';
import { Breakpoints, ViewPortSizes } from './types/enums';

type Props = {
  children?: ReactNode;
};

const BreakpointContext = createContext<string>('');

const useBreakpoint = (): string => useContext<string>(BreakpointContext);

const BreakpointProvider = ({ children }: Props): JSX.Element => {
  const getWindowSize = (): number =>
    window?.innerWidth || window?.screen?.width || document?.documentElement?.clientWidth || 0;
  const [viewPortType, setViewPortType] = useState<string>('');
  // Added below code to suppress useLayoutEffect warning.
  const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => 0;

  useBrowserLayoutEffect(() => {
    const watchResize = () => {
      const windowSize = getWindowSize();
      if (windowSize < ViewPortSizes?.SMALL) {
        setViewPortType(Breakpoints?.XS);
      } else if (windowSize >= ViewPortSizes?.SMALL && windowSize < ViewPortSizes.MEDIUM) {
        setViewPortType(Breakpoints?.SM);
      } else if (windowSize >= ViewPortSizes?.MEDIUM && windowSize < ViewPortSizes.LARGE) {
        setViewPortType(Breakpoints?.MD);
      } else if (windowSize >= ViewPortSizes?.LARGE && windowSize < ViewPortSizes.XLARGE) {
        setViewPortType(Breakpoints?.LG);
      } else {
        setViewPortType(Breakpoints?.XL);
      }
    };
    window.addEventListener('resize', watchResize);
    watchResize();
    return () => window.removeEventListener('resize', watchResize);
  }, [global?.window?.innerWidth]);

  return (
    <>
      <BreakpointContext.Provider value={viewPortType}>
        <>{children}</>
      </BreakpointContext.Provider>
    </>
  );
};

export default BreakpointProvider;
export { useBreakpoint, Breakpoints, ViewPortSizes };
