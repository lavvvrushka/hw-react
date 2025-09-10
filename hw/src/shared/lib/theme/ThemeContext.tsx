import { createContext } from 'react'

export type ThemeContextType = {
  theme: string
  changeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)