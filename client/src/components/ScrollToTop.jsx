import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // If Lenis is being used globally, window.scrollTo(0,0) usually works
    // unless Lenis is specifically configured to ignore it.
    // If there were a global instance of Lenis, we would call lenis.scrollTo(0)
  }, [pathname]);

  return null;
};

export default ScrollToTop;
