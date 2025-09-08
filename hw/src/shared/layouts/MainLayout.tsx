import React from 'react'
import LayoutHeader from '../../widgets/LayoutHeader/LayoutHeader'
import LayoutFooter from '../../widgets/LayoutFooter/LayoutFooter'
import styles from './MainLayout.module.css'

type Props = {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className={styles.mainLayout}>
      <LayoutHeader
        headerClassName={styles.header}
        titleClassName={styles.headerTitle}
        subtitleClassName={styles.headerSubtitle}
      />
      <main className={styles.mainContent}>{children}</main>
      <LayoutFooter footerClassName={styles.footer} textClassName={styles.footerText} />
    </div>
  )
}

export default MainLayout