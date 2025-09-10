import React from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutHeader } from '../../widgets/LayoutHeader/LayoutHeader'
import { LayoutFooter } from '../../widgets/LayoutFooter/LayoutFooter'
import styles from './MainLayout.module.css'

type Props = {
  children?: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className={styles['main-layout']}>
      <LayoutHeader />
      <main className={styles['main-content']}>
        {children || <Outlet />}
      </main>
      <LayoutFooter />
    </div>
  )
}

export { MainLayout }