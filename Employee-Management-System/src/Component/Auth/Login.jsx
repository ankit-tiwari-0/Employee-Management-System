import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [gmail, setgmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(gmail,password)
    console.log('submit dale');
    setgmail('')
    setpassword('')

  }
  return (
    <div className='flex h-screen w-full lg:w-screen items-center justify-center '>
      <div className='border-3 rounded-4xl py-12 px-5 lg:p-20  lg:h-1/2  border-emerald-600  '>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}
          className='flex flex-col items-center justify-center'>

          <input value={gmail}
            onChange={(e) => {
              setgmail(e.target.value)
            }}
            required className='border-2 border-emerald-500 rounded-full bg-transparent outline-none text-xl py-3 px-5 placeholder:text-gray-400 active:scale-95 mb-5 '
            type="email" placeholder='Enter your email' />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value)
            }}
            required className='border-2 border-emerald-500 rounded-full bg-transparent lg:mt-5 mt-15 outline-none text-xl py-3 px-5 placeholder:text-gray-500 active:scale-95   hover:bg-pink-200' type="password" placeholder='Enter password' />
          <button className='border-none lg:mt-15 mt-30 bg-emerald-500 rounded-full  text-white outline-none font-bold text-xl py-2 px-8 cursor-pointer active:scale-50 hover:bg-pink-300 hover:text-pink-100 ' >Log in</button>
        </form>
      </div>


    </div>
  )
}

export default Login