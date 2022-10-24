import { Dispatch, SetStateAction, useCallback, useState } from "react";

const storeValue = <T>(key: string, value: T): void => {
  if (typeof window === "undefined") {
    return;
  }

  const valueSerialized = JSON.stringify(value);
  window.localStorage.setItem(key, valueSerialized);
};

const getStoredValue = <T>(key: string, initialValue: T): T => {
  if (typeof window === "undefined") {
    return initialValue;
  }

  try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
  } catch (err) {
      console.log(err);
      return initialValue;
  }
};

/**
 * Persist the state with local storage so that it remains after a page refresh. This can be useful
 * for a dark theme or to record session information. This hook is used in the same way as useState
 * except that you must pass the storage key in the 1st parameter. If the window object is not
 * present (as in SSR), useLocalStorage() will return the default value.
 *
 * @param key - Key to use in local storage to store value
 */
const useLocalStorage = <T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] | [T] => {
  const [state, setState] = useState(getStoredValue(key, initialValue));

  const storeState: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      let newValue = value;
      if (typeof value === "function") {
        newValue = (value as ((prevState: T) => T))(state);
      }
      setState(newValue);
      storeValue(key, newValue);
    },
    [key, state]
  );

  if (typeof window === "undefined") return [initialValue as T];
  return [state, storeState];
};

export default useLocalStorage;
