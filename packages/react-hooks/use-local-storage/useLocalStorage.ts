import { Dispatch, SetStateAction, useState, useEffect } from "react";

/**
 * Persist the state with local storage so that it remains after a page refresh. This can be useful
 * for a dark theme or to record session information. This hook is used in the same way as useState
 * except that you must pass the storage key in the 1st parameter. If the window object is not
 * present (as in SSR), useLocalStorage() will return the default value.
 *
 * @param key - Key to use in local storage to store value
 */
const useLocalStorage = <T>(key: string, initialValue: T | (() => T)): [T, Dispatch<SetStateAction<T>>] => {
  const readValue = () => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  };

  // state to store value
  // pass initial state function to `useState` so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue: Dispatch<SetStateAction<T>> = (value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window == "undefined") {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
    }

    try {
      // allow value to be a function so we have same API as `useState`
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));

      // save state
      setStoredValue(valueToStore);

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event("local-storage"));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue());
    };

    // Prevent build error "window is undefined" but keeps working
    if (typeof window == "undefined") {
      console.warn(
        `Window is not defined, useLocalStorage hook won't be notified of local storage changes.`
      );
      return;
    }

    // this only works for other documents, not the current one
    window.addEventListener("storage", handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, []);

  return [storedValue, setValue];
};

export default useLocalStorage;
