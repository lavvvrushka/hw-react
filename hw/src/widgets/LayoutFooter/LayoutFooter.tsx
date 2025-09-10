<<<<<<< HEAD
type Props = {
  footerClassName?: string
  textClassName?: string
}

function LayoutFooter({ footerClassName, textClassName }: Props) {
  return (
    <footer className={footerClassName}>
      <p className={textClassName}>Домашнее задание</p>
=======
import styles from '../../shared/layouts/MainLayout.module.css'

function LayoutFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer-text']}>Домашнее задание</p>
>>>>>>> hm-2
    </footer>
  )
}

<<<<<<< HEAD
export default LayoutFooter
=======
export { LayoutFooter }
>>>>>>> hm-2
