import React from 'react'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { AdminAction } from '../AdminAction'
import './Admin.css'

export const Admin = () => {
  return (
    <div className='Admin-route'>
        <Sidebar/>
        <AdminAction/>
    </div>
  )
}

