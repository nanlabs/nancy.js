import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

/**
 * Persist the state with local storage so that it remains after a page refresh. This can be useful
 * for a dark theme or to record session information. This hook is used in the same way as useState
 * except that you must pass the storage key in the 1st parameter. If the window object is not
 * present (as in SSR), useLocalStorage() will return the default value.
 *
 * @param key - Key to use in local storage to store value
 */
const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  // getStoredValue is a function that returns the value from local storage
  const getStoredValue = () => {
    // Prevent build error "window is undefined" but keep keep working
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

  // state to store value
  // pass initial state function to `useState` so logic is only executed once
  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const storeState: Dispatch<SetStateAction<T>> = useCallback(
    (value) => {
      try {
        // allow value to be a function so we have same API as `useState`
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;

        // save to local storage
        const serializedValue = JSON.stringify(value);
        window.localStorage.setItem(key, serializedValue);

        // save state
        setStoredValue(valueToStore);

        // We dispatch a custom event so every useLocalStorage hook are notified
        window.dispatchEvent(new Event("local-storage"));
      } catch (err) {
        console.log(err);
      }
    },
    [key, storedValue]
  );

  useEffect(() => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === "undefined") {
      return;
    }

    const handleStorageChange = () => {
      setStoredValue(getStoredValue);
    };

    // this only works for other documents, not the current one
    window.addEventListener("storage", handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, []);

  return [storedValue, storeState];
};

export default useLocalStorage;
