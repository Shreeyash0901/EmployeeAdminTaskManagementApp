import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-full '>
      <Header/>

      <h1 className='text-5xl mt-5'>AdminDashboard</h1>
      
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard