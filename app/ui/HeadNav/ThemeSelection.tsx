"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themes = [
  { name: "winter" },
  { name: "spring" },
  { name: "summer" },
  { name: "autumn" },
];

export default function ThemeSelection() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="themeSelection flex space-x-4 mx-5">
      {themes.map((t) => (
        <button
          key={t.name}
          className={`flex items-center space-x-2 p-2 rounded-full opacity-80 ${theme === t.name.toLowerCase() ? "bg-gray-500 text-[#f1f3f9]" : "bg-gray-200 text-[#575a5f]"} `}
          onClick={() => setTheme(t.name.toLowerCase())}
        >
          <div
            className={`w-5 h-5 border-solid rounded-full ${theme === t.name.toLowerCase() ? "border-4 border-[#f1f3f9]" : "border-2 border-[#575a5f]"}`}
          ></div>
          <p className="m-0">{t.name}</p>
        </button>
      ))}
    </div>
  );
}
