import { useEffect, useState } from "react";

const BREAKPOINTS = {
  "MOBILE:768": 768,
  "TABLET:1024": 1024,
  "DESKTOP:1280": 1280,
  "LARGE_DESKTOP:1536": 1536,
} as const;

export function useIsBreakpoint(breakpoint: keyof typeof BREAKPOINTS) {
  const [isBreakpoint, setIsBreakpoint] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINTS[breakpoint] - 1}px)`);
    const onChange = () => {
      setIsBreakpoint(window.innerWidth < BREAKPOINTS[breakpoint]);
    };
    mql.addEventListener("change", onChange);
    setIsBreakpoint(window.innerWidth < BREAKPOINTS[breakpoint]);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return !!isBreakpoint;
}
