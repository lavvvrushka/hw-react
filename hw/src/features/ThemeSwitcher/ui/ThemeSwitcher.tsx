import { useTheme } from '../../../shared/lib/theme/ThemeContext'

function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme()

  return (
    <button 
      onClick={changeTheme}
      style={{
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        padding: '5px'
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeSwitcher
