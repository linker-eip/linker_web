import React from 'react'
import HotbarDashboard from './Partials/HotbarDashboard'
import SidebarDashboard from './Partials/SidebarDashboard'
import { useTranslation } from 'react-i18next'
import '../CSS/AdminDashboard.scss'
import { AdminDashboardState } from '../Enum'
import isPrivateRoute from '../Component/isPrivateRoute'

function AdminDashboard (): JSX.Element {
  isPrivateRoute({ admin: true })
  const state = AdminDashboardState
  const { t } = useTranslation()
  return (
    <div className='std-bord-container'>
      <HotbarDashboard> { t('admin.dashboard.home') } </HotbarDashboard>
      <div className='std-bord-container__page'>
        <SidebarDashboard state={state.DASHBOARD} />
        <div className="std-bord-container__content"></div>
      </div>
    </div>
  )
}

export default AdminDashboard
