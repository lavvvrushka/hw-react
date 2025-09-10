import styles from '../../shared/layouts/MainLayout.module.css'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'

function LayoutHeader() {
  return (
    <header className={styles.header}>
      <div className={styles['header-inner']}>
        <h1 className={styles['header-title']}>HomeWork</h1>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export { LayoutHeader }

