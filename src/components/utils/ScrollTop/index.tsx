import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelector("body")?.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
