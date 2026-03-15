import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-2xl p-20  border-emerald-600'>
        <form className='flex flex-col items-center justify-center'>
            <input required className='border-2 border-emerald-500 rounded-full bg-transparent outline-none text-xl py-3 px-5 placeholder:text-gray-400 ' 
            type="email" placeholder='Enter your email' />
            <input required className='border-2 border-emerald-500 rounded-full bg-transparent mt-4 outline-none text-xl py-3 px-5 placeholder:text-gray-500 '  type="password" placeholder='Enter password' />
            <button className='border-none mt-5 bg-emerald-500 rounded-full  text-white outline-none text-xl py-2 px-4 placeholder:text-gray-400 ' >Log in</button>
        </form>
      </div>


    </div>
  )
}

export default Login