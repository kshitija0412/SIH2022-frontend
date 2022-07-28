import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollAffix from './ScrollAffix'

function Layout() {
  return (
    <div>
        {/* All common elements */}
        {/* Header */}
        <ScrollAffix />
        <Outlet />
        {/* Footer */}
    </div>
  )
}

export default Layout