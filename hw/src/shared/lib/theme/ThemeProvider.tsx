import { useState, useEffect, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
