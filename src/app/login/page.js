'use client';

import Link from 'next/link';

const Login = () => {
  return (
    <>
      <div className='mx-auto col-6 w-200 mt-20 shadow-lg rounded-lg bg-white p-8'>
        <form>
          <div className='mb-4'>
            <h1 className='text-2xl font-bold  text-gray-700 text-center mb-6'>
              Login
            </h1>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700'
          >
            Login
          </button>
        </form>
        <p className='mt-4 text-center text-sm text-gray-600'>
          Don&apos;t have an account?{' '}
          <Link href='/register' className='text-blue-600 hover:underline'>
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;