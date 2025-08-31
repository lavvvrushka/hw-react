import React from 'react'
import LayoutHeader from '../../widgets/LayoutHeader'
import LayoutFooter from '../../widgets/LayoutFooter'

type Props = {
  children: React.ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div >
      <LayoutHeader />
      <main>{children}</main>
      <LayoutFooter />
    </div>
  )
}

export default MainLayout