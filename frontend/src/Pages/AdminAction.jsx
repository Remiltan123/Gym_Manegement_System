import React from 'react'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import "./CSS/AdminAction.css"
import { AddMember } from '../Components/AddMember/AddMember'
import { AddTrainer } from '../Components/AddTrainer/AddTrainer'
import { AddPayment } from '../Components/AddPayment/AddPayment'
import { AddEquipment } from '../Components/AddEquipment/AddEquipment'
import { Homepage } from './Homepage'
import { SearchMember } from '../Components/SearchMember/SearchMember'

export const AdminAction = () => {
  return (
      <div className="RouteContainer"> 
        <Routes>
          <Route path='AddMember' element={<AddMember />} />
          <Route path='Trainer' element={<AddTrainer />} />
          <Route path='Payment' element={<AddPayment />} />
          <Route path='Equipment' element={<AddEquipment />} />
          <Route path='SearchMember' element={<SearchMember/>}/>
          <Route path='/AdminLogin' element={<Homepage />} />
        </Routes>
      </div>
    
  )
}
