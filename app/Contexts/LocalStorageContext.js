"use client";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

const LocalStorageContext = createContext();
export const LocalStorageMainKey = "salrazaSiteSettings";
const DEFAULT_SETTINGS = {
  appearanceMode: "dark",
  theme: 'default',
  taskbarPosition: "center",
};

export const LocalStorageProvider = ({ children }) => {
  const [storageState, setStorageState] = useState(DEFAULT_SETTINGS);

  // Function to sync storageState with localStorage
  const syncStorageWithLocalStorage = useCallback(() => {
    const storedSettings = window.localStorage.getItem(LocalStorageMainKey);
    if (storedSettings) {
      setStorageState(JSON.parse(storedSettings)); // Update state from localStorage
    } else {
      setStorageState(DEFAULT_SETTINGS); // Set default if nothing is stored
      window.localStorage.setItem(LocalStorageMainKey, JSON.stringify(DEFAULT_SETTINGS)); // Store default in localStorage
    }
  }, []);

  // Initialize localStorage values on the first render
  useEffect(() => {
    syncStorageWithLocalStorage();
  }, [syncStorageWithLocalStorage]);

  // Set a single value in localStorage and update state
  const setItem = (key, value) => {
    try {
      const updatedState = { ...storageState, [key]: value }; // Update specific key-value pair in state
      localStorage.setItem(LocalStorageMainKey, JSON.stringify(updatedState)); // Update localStorage
      setStorageState(updatedState); // Update state
    } catch (error) {
      console.error("Error setting value in localStorage:", error);
    }
  };

  // Get a single value from localStorage (from the state)
  const getItem = (key) => {
    return storageState[key] ?? null; // Return the value for the key or null if not found
  };

  // Update specific key in localStorage (only if it's an object)
  const updateItem = (key, updates) => {
    const currentValue = storageState[key];
    if (currentValue && typeof currentValue === "object") {
      const updatedValue = { ...currentValue, ...updates }; // Merge updates with current value
      setItem(key, updatedValue); // Set the updated value
    } else {
      console.warn(`The value for key "${key}" is not an object. Update operation skipped.`);
    }
  };

  return (
    <LocalStorageContext.Provider value={{ setItem, getItem, updateItem, storageState }}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// Custom hook to use the context
export const useLocalStorage = () => useContext(LocalStorageContext);
