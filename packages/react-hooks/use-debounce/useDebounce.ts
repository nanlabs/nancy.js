import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay = 1000) => {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setCurrentValue(value);
    }, delay);

    return () => {
      return clearTimeout(handler);
    };
  }, [value]);

  return currentValue;
};

export default useDebounce;
