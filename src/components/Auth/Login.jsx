import React, { useState } from 'react';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('');
    setPassword('');
  };

  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      <div className='p-8 sm:p-20 border-2 border-red-600 rounded-xl'>
        <form 
          onSubmit={submitHandler}
          className='flex gap-4 flex-col justify-center items-center'
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder='Email'
            autoComplete="email"
            className='w-full sm:w-[22rem] border-2 border-red-600 text-xl py-2 text-center rounded-full placeholder:text-gray-400 bg-transparent text-white'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder='Password'
            autoComplete="current-password"
            className='w-full sm:w-[22rem] border-2 border-red-600 text-xl py-2 text-center rounded-full placeholder:text-gray-400 bg-transparent text-white'
          />
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex  items-center'>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className='text-white ml-2'>
                Remember Me
              </label>
            </div>
            <div>
              <h3 className='text-red-600 cursor-pointer'>Forgot Password</h3>
            </div>
          </div>
          <button className='bg-red-600 rounded-full w-full sm:w-[12rem] text-white font-extrabold p-2'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
