import React from 'react'

const CreateTask = () => {
  return (
    <div className=' p-20 bg-[#2e2929] rounded-md mt-10'>
      <form action="" className='flex flex-wrap w-full  items-start justify-between  '>
   
    <div className='w-1/2 px-6 '>

    <div className=''>
        <h3 className='text-2xl mb-2 font-medium'>Task Title :-</h3>
        <input 
        className='bg-transparent w-full h-10 p-4  border-2 border-white rounded-lg placeholder:text-gray-400 capitalize'
        type="text" placeholder='Make Task' />
    </div>

       <div className='mt-3'>
       <h3 className='text-2xl mb-2 font-medium'>Date :-</h3>
       <input type="Date" 
       className='bg-transparent w-full h-10 p-4  border-2 border-white rounded-lg placeholder:text-gray-400 capitalize'
       />
       </div>

        <div className='mt-3'>
        <h3 className='text-2xl mb-2 font-medium'>Assign To :-</h3>
        <input type="text" placeholder='Employee Name'
        className='bg-transparent w-full h-10 p-4  border-2 border-white rounded-lg placeholder:text-gray-400 capitalize'
        />
        </div>
        
       <div className='mt-3'>
       <h3 className='text-2xl mb-2 font-medium'>Category :-</h3>
       <input type="text" placeholder='Design,Develop,Test'
       className='bg-transparent w-full h-10 p-4  border-2 border-white rounded-lg placeholder:text-gray-400 capitalize'
       />
       </div>

    </div>

       

    <div className='w-1/2 mt-2 flex flex-col items-center justify-center '>
        <div className='w-[80%] '>
        <h3 className='text-2xl font-medium mb-2'>Discription :-</h3>
        <textarea name="" id="" cols="30" rows="10" 
         className='bg-transparent w-full border-2 border-white rounded-lg placeholder:text-white'
        ></textarea>
        </div>
        <button className='bg-emerald-400 rounded font-semibold w-[60%] mt-4 p-2  '>Create Task</button>
    </div>

       

       
        
      </form>
      </div>
  )
}

export default CreateTask