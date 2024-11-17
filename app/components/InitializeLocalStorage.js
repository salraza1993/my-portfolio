"use client";

import { useEffect, useState } from "react";

export default function InitializeLocalStorage() {
  const [settings, setSettings] = useState(null);
  useEffect(() => {
    const userSettings = localStorageManager.get("userSettings");
    if (userSettings) {
      setSettings(userSettings);
    }
  }, []);
  return
}
