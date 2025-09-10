<<<<<<< HEAD
type Props = {
  headerClassName?: string
  titleClassName?: string
  subtitleClassName?: string
}

function LayoutHeader({ headerClassName, titleClassName, subtitleClassName }: Props) {
  return (
    <header className={headerClassName}>
      <h1 className={titleClassName}>HomeWork</h1>
      <p className={subtitleClassName}>React + TypeScript</p>
=======
import styles from '../../shared/layouts/MainLayout.module.css'
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui/ThemeSwitcher'

function LayoutHeader() {
  return (
    <header className={styles.header}>
      <div className={styles['header-inner']}>
        <h1 className={styles['header-title']}>HomeWork</h1>
        <ThemeSwitcher />
      </div>
>>>>>>> hm-2
    </header>
  )
}

<<<<<<< HEAD
export default LayoutHeader
=======
export { LayoutHeader }
>>>>>>> hm-2
