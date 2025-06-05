import { useEffect, useState } from "react";

function useLocalStorage(storageKey, defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [storageKey, value]); // Runs only when storageKey or value changes

  return [value, setValue];
}

export default useLocalStorage;
