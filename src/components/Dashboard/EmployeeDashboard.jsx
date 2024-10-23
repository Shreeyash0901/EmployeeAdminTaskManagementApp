import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header/>
            <h1 className='text-5xl mt-5'>EmployeeDashboard</h1>
      
            <TaskListNumbers/>
            <TaskList />
        </div>
    </div>
  )
}

export default EmployeeDashboard