// import React from 'react'
'use client'

const page = () => {
  return (
    <>
      <div className='mx-auto col-6 w-200 mt-20 shadow-lg rounded-lg bg-white p-8'>
        <h1 className='text-2xl font-bold  text-gray-700 text-center mb-6'>Register</h1>
        <form>
          <div className='mb-4'>
            <label htmlFor='lastname' className='block text-sm font-medium text-gray-700'>Username</label>
            <input type='text' id='username' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='fullname' className='block text-sm font-medium text-gray-700'>Fullname</label>
            <input type='text' id='fullname' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input type='email' id='email' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input type='password' id='password' className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2' />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'>Register</button>
        </form>
        <p className='mt-4 text-center text-sm text-gray-600'>Already have an account? <a href='/login' className='text-blue-600 hover:underline'>Login</a></p>
      </div>
    </>
  )
}

export default page
