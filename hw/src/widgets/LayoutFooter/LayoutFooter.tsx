import styles from '../../shared/layouts/MainLayout.module.css'

function LayoutFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer-text']}>Домашнее задание</p>
    </footer>
  )
}

export { LayoutFooter }

