import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex  mt-10 justify-between gap-5 screen'>
       
        <div className=' rounded-xl py-10 px-9 h-40 w-[30%] bg-red-400'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-3xl font-semibold'>New Task</h1>
        </div>

        <div className=' rounded-xl py-10 px-9 h-40 w-[30%] bg-blue-400'>
            <h1 className='text-3xl font-semibold'>1</h1>
            <h1 className='text-3xl font-semibold'>Completed Task</h1>
        </div>

        <div className=' rounded-xl py-10 px-9 h-40 w-[30%]  bg-green-400'>
            <h1 className='text-3xl font-semibold'>3</h1>
            <h1 className='text-3xl font-semibold'>Accepted Task</h1>
        </div>

        <div className=' rounded-xl py-10 px-9 h-40 w-[30%] text-red-600 bg-yellow-300'>
            <h1 className='text-3xl font-semibold'>0</h1>
            <h1 className='text-3xl font-semibold'>Faild Task</h1>
        </div>

    </div>
  )
}

export default TaskListNumbers