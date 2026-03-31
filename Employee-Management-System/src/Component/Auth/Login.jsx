import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

  const [gmail, setgmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(gmail, password)
    setgmail('')
    setpassword('')
  }

  return (
    <div className='flex h-screen w-full items-center justify-center 
    bg-linear-to-br from-black via-gray-900 to-black px-4'>

      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg
      border border-white/10 rounded-3xl 
      py-10 px-6 sm:px-10 md:px-12
      bg-white/5 backdrop-blur-xl shadow-2xl'>

        <form onSubmit={submitHandler}
          className='flex flex-col items-center justify-center'>

          {/* Email */}
          <input
            value={gmail}
            onChange={(e) => setgmail(e.target.value)}
            required
            className='w-full mb-5 
            bg-white/10 border border-white/20 
            rounded-full px-5 py-3 text-white text-base sm:text-lg
            placeholder:text-white/50 
            focus:outline-none focus:ring-2 focus:ring-emerald-400
            transition-all duration-300'
            type="email"
            placeholder='Enter your email'
          />

          {/* Password */}
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className='w-full mb-6 
            bg-white/10 border border-white/20 
            rounded-full px-5 py-3 text-white text-base sm:text-lg
            placeholder:text-white/50 
            focus:outline-none focus:ring-2 focus:ring-emerald-400
            transition-all duration-300'
            type="password"
            placeholder='Enter password'
          />

          {/* Button */}
          <button
            className='w-full 
            bg-linear-to-r from-emerald-400 to-emerald-600 
            rounded-full text-white font-semibold 
            py-3 text-base sm:text-lg
            hover:scale-105 hover:shadow-lg 
            transition-all duration-300 active:scale-95'>
            Log in
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login