'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

/**
 * Your app's theme provider component.
 * 'use client' is essential for next-themes to work with app-dir.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return <NextThemesProvider 
    themes={['spring', 'summer', 'autumn', 'winter']}
    value={{ spring: 'spring-theme', summer: 'summer-theme', autumn: 'autumn-theme', winter: 'winter-theme' }}
  >
    {children}
  </NextThemesProvider>
}