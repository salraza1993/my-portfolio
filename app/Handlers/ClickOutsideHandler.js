"use client"
import { useEffect, useRef } from "react";

/**
 * Hook to detect clicks outside a given element.
 * @param callback Function to call when a click outside the element is detected.
 * @returns A ref to attach to the target element.
 */
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
