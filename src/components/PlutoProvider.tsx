import React, { createContext, useContext, useState, useEffect } from 'react'
import { Theme, ThemeContextProps, ThemeProvidersProps } from '../types'
import { ThemeProvider } from 'styled-components'

const STORAGE_KEY = 'themeMode'

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

const PlutoProvider: React.FC<ThemeProvidersProps> = ({ children, dark, light }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme['mode']
    return { mode: storedTheme || 'system' }
  })

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  const toggleTheme = (mode: 'light' | 'dark' | 'system') => {
    if (mode === 'system') {
      localStorage.removeItem(STORAGE_KEY)
      setTheme({ mode: getSystemTheme() })
    } else {
      localStorage.setItem(STORAGE_KEY, mode)
      setTheme({ mode })
    }
  }

  const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    if (theme.mode === 'system') {
      setTheme({ mode: event.matches ? 'dark' : 'light' })
    }
  }

  mediaQuery.addEventListener('change', handleSystemThemeChange)

  useEffect(() => {
    if (theme.mode === 'system') {
      setTheme({ mode: getSystemTheme() })
    }
  }, [theme.mode])

  useEffect(() => {
    const themeColorMetaTag = document.querySelector('meta[name="theme-color"]')
    const currentColor = theme.mode === 'light' ? light || '#ffffff' : dark || '#222222'

    if (themeColorMetaTag) {
      themeColorMetaTag.setAttribute('content', currentColor)
    } else {
      const newMetaTag = document.createElement('meta')
      newMetaTag.setAttribute('name', 'theme-color')
      newMetaTag.setAttribute('content', currentColor)
      document.head.appendChild(newMetaTag)
    }

    const statusBarMetaTag = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')
    if (statusBarMetaTag) {
      statusBarMetaTag.setAttribute('content', currentColor)
    } else {
      const newStatusBarMetaTag = document.createElement('meta')
      newStatusBarMetaTag.setAttribute('name', 'apple-mobile-web-app-status-bar-style')
      newStatusBarMetaTag.setAttribute('content', currentColor)
      document.head.appendChild(newStatusBarMetaTag)
    }
  }, [theme.mode])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={{ mode: theme.mode }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a PlutoProvider')
  }
  return context
}

export { PlutoProvider, useTheme }
