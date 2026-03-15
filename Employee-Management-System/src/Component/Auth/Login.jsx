import React, { useState } from 'react'

const Login = () => {

  const [gmail, setgmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) =>{
      e.preventDefault()
      console.log('submit dale');
      setgmail('')
      setpassword('')
      
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-4xl p-20  border-emerald-600'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
           
            <input value={gmail}
            onChange={(e)=>{
                setgmail(e.target.value)
            }}
             required className='border-2 border-emerald-500 rounded-full bg-transparent outline-none text-xl py-3 px-5 placeholder:text-gray-400 ' 
            type="email" placeholder='Enter your email' />
            <input 
            value={password}
            onChange={(e)=>{
                setpassword(e.target.value)
            }}
            required className='border-2 border-emerald-500 rounded-full bg-transparent mt-4 outline-none text-xl py-3 px-5 placeholder:text-gray-500 '  type="password" placeholder='Enter password' />
            <button className='border-none mt-5 bg-emerald-500 rounded-full  text-white outline-none font-bold text-xl py-2 px-8 cursor-pointer active:scale-110 hover:bg-pink-100 hover:text-pink-300 ' >Log in</button>
        </form>
      </div>


    </div>
  )
}

export default Login