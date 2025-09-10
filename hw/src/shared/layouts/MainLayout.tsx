import React from 'react'
<<<<<<< HEAD
import LayoutHeader from '../../widgets/LayoutHeader/LayoutHeader'
import LayoutFooter from '../../widgets/LayoutFooter/LayoutFooter'
=======
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader'
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter'
>>>>>>> hm-2
import styles from './MainLayout.module.css'

type Props = {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
<<<<<<< HEAD
    <div className={styles.mainLayout}>
      <LayoutHeader
        headerClassName={styles.header}
        titleClassName={styles.headerTitle}
        subtitleClassName={styles.headerSubtitle}
      />
      <main className={styles.mainContent}>{children}</main>
      <LayoutFooter footerClassName={styles.footer} textClassName={styles.footerText} />
=======
    <div className={styles['main-layout']}>
      <LayoutHeader />
      <main className={styles['main-content']}>{children}</main>
      <LayoutFooter />
>>>>>>> hm-2
    </div>
  )
}

export { MainLayout }