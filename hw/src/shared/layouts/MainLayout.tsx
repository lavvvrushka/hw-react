import React from 'react'
import LayoutHeader from '../../widgets/LayoutHeader/LayoutHeader'
import LayoutFooter from '../../widgets/LayoutFooter/LayoutFooter'
import './MainLayout.css'

type Props = {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <LayoutHeader />
      <main className="main-content">{children}</main>
      <LayoutFooter />
    </div>
  )
}

export default MainLayout