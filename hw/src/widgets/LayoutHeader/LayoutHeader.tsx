import { Link } from 'react-router-dom'
import styles from '../../shared/layouts/MainLayout.module.css'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'

function LayoutHeader() {
  return (
    <header className={styles.header}>
      <div className={styles['header-inner']}>
        <Link to="/" className={styles['header-title']}>
          <h1>HomeWork</h1>
        </Link>
        <nav className={styles.nav}>
          <Link to="/posts" className={styles.navLink}>Посты</Link>
          <Link to="/users/1/posts" className={styles.navLink}>Пользователь 1</Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export { LayoutHeader }

