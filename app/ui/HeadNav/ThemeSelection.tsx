'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

const themes = [
    { name: "winter" },
    { name: "spring" },
    { name: "summer" },
    { name: "autumn" },
  ];


export default function ThemeSelection() {
    const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

  return (
    <div className="flex space-x-4">
      {themes.map((t) => (
        <button
          key={t.name}
          className={`px-4 py-2 ${theme === t.name.toLowerCase() ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} `}
          onClick={() => setTheme(t.name.toLowerCase())}
        >
          {t.name}
        </button>
      ))}
    </div>
  )
}