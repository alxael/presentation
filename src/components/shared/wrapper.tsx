import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper = (props: WrapperProps) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return props.children;
};

export default Wrapper;
