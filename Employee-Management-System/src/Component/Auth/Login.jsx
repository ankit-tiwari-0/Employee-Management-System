import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div>
        <form >
            <input type="text" placeholder='Enter your email' />
            <input type="text" placeholder='Enter password' />
            <button>Log in</button>
        </form>
      </div>


    </div>
  )
}

export default Login