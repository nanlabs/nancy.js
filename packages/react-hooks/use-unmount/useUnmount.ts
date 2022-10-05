import { useRef, useEffect } from 'react';

const useUnmount = (fn: () => void) => {
  const componentWillUnmount = useRef(false);

  useEffect(
    () =>
      // This is componentWillUnmount
      () => {
        componentWillUnmount.current = true;
      },
    []
  );

  useEffect(
    () => () => {
      // This line only evaluates to true after the componentWillUnmount happens
      if (componentWillUnmount.current) {
        // this will automatically favorite/delete the images
        // if the user still has selected images
        fn();
      }
    },
    [fn]
  );
};

export default useUnmount;
