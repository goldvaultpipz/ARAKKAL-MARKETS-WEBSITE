import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Safety check for Next.js SSR: Only run this on the client (browser)
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Run the check once when the component mounts
    checkMobile();

    // Listen for browser window resize events
    window.addEventListener("resize", checkMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [breakpoint]);

  return isMobile;
}