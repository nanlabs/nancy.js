import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

const storeValue = async <T>(key: string, value: T): Promise<void> => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const valueSerialized = JSON.stringify(value);
    window.localStorage.setItem(key, valueSerialized);
  } catch (err) {
    console.log(err);
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
const useLocalStorage = <T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] => {

  const getStoredValue = useCallback(<T>(key: string, initialValue: T): T => {
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
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState(getStoredValue(key, initialValue));

  useEffect(() => {
    if (typeof window === "undefined") {
        return;
     }
  
    const handleStorageChange = () => {
      setStoredValue(getStoredValue(key, initialValue));
    };
  
    // this only works for other documents, not the current one
    window.addEventListener("storage", handleStorageChange);
  
    // this is a custom event, triggered in writeValueToLocalStorage
    window.addEventListener("local-storage", handleStorageChange);
  
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, [key, initialValue]);

  const storeState: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      const valueToStore = value instanceof Function ? (value as ((prevState: T) => T))(storedValue) : value;
      storeValue(key, valueToStore).then(() => {
        setStoredValue(valueToStore);
      });
    },
    [key, storedValue]
  );

  return [storedValue, storeState];
};

export default useLocalStorage;
