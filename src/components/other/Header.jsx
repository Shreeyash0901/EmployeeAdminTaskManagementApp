import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='uppercase text-l font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Employee</span></h1>
        <button className='uppercase font-bold bg-red-600 p-4 rounded-lg hover:bg-red-700'>Log Out</button>
    </div>
  )
}

export default Header