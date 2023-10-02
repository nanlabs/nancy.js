import { useEffect, useRef } from "react";

const usePrevious = <T>(state: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref.current;
};

export default usePrevious;
