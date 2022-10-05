import { EffectCallback, MutableRefObject, useEffect, useRef } from 'react';

/**
 * Use setTimeout with Hooks in a declarative way.
 *
 * @see https://stackoverflow.com/a/59274757/3723993
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
const useTimeout = (
  callback: EffectCallback,
  delay: number | null,
): MutableRefObject<number | null> => {
  const timeoutRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setTimeout kicks in, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // timeout will be reset.

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the timeout:

  useEffect(() => {
    if (typeof delay !== 'number') {
      return undefined;
    }

    timeoutRef.current = window.setTimeout(() => callbackRef.current(), delay);

    // Clear timeout if the components is unmounted or the delay changes:
    return () => window.clearTimeout(timeoutRef.current || 0);
  }, [delay]);

  // In case you want to manually clear the timeout from the consuming component...:
  return timeoutRef;
}

export default useTimeout;
