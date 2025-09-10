import { useTheme } from '../../../shared/lib/theme/useTheme'
import styles from './ThemeSwitcher.module.css'

function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme()

  return (
    <button 
      onClick={changeTheme}
      className={styles['theme-switcher']}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export { ThemeSwitcher }
