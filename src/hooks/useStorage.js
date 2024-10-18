import { useState, useEffect } from "react";

const useStorage = (key, initialValue, storageType = 'local') => {
  // Determine which storage type to use (localStorage or sessionStorage)
  const storage = storageType === 'local' ? localStorage : sessionStorage;

  // Helper function to retrieve the stored value
  const getStoredValue = () => {
    try {
      const storedItem = storage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : initialValue;
    } catch (error) {
      console.error("Error retrieving storage value: ", error);
      return initialValue;
    }
  };

  // Use React's state to store the value and initialize it with the stored value
  const [storedValue, setStoredValue] = useState(getStoredValue);

  // Use useEffect to update storage whenever the key or value changes
  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting storage value: ", error);
    }
  }, [key, storedValue, storage]);

  // Return the stored value and a function to update it
  return [storedValue, setStoredValue];
};

export default useStorage;
