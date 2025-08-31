import './LayoutHeader.css'
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher'

function LayoutHeader() {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">HomeWork</h1>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default LayoutHeader