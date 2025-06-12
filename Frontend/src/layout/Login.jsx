import React from 'react'

function Login() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
      <div className='rounded-sm w-md flex flex-col px-8 py-8 bg-white mt-24 gap-2'>
        <h3 className='text-3xl font-semibold'>Welcome Back</h3>
        <div className='text-gray-400 font-medium'>Login with email</div>
        <form action="" className='flex flex-col gap-2'>
          <input className='border px-2 py-1 rounded-xs' type="text" name="email" id="" placeholder='Email' />
          <input className='border px-2 py-1 rounded-xs' type="text" name="password" id="" placeholder='Password' />
          <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" id='remember' name='remember' value='remember' />
              <label for="checkbox" className='text-gray-400'>Remember me</label>
            </div>
            <div className='text-gray-500 font-semibold'>account</div>
          </div>
        </form>
      </div>

      <div className='text-gray-400'>Or create an <span className='text-gray-500 font-semibold'>Forgot Password ?</span></div>
    </div>
  )
}

export default Login
