import { useCallback, useEffect, useState } from "react";

export type UseOverflowParams = {
  elementRef: React.RefObject<HTMLElement>;
};

const checkOverflow = (element: HTMLElement) => {
  if (element)
    return (
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth
    );
  return false;
};

const useOverflow = ({ elementRef }: UseOverflowParams) => {
  const [overflowActive, setOverflowActive] = useState<boolean>(false);

  const onResize = useCallback(() => {
    if (!elementRef.current) return;
    if (checkOverflow(elementRef.current)) {
      setOverflowActive(true);
      return;
    }
    setOverflowActive(false);
  }, [elementRef]);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return {
    overflowActive,
  };
};

export default useOverflow;
