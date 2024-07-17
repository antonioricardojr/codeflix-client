'use client';

import { InputField } from "../../components/InputField";


export function ForgotPasswordForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submit from forgot password');
  }
  return (
    <form onSubmit={onSubmit} 
    className="flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg">
    <div className='flex flex-col items-center space-y-4'>
    <h1 className='text-3xl font-bold'>
        Forgot Your password?
    </h1>
    <p className='text-sm text-gray-500'>
        Enter your email to reset your password
    </p>
    </div>

    <div className='mt-8 flex flex-col space-y-4'>
        <InputField id='email' name='email' type='email' label='Email' placeholder='Enter your email' />
    </div>

    <div className='flex flex-col-reverse space-y-4 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button className='flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 space-x-2 text-sm font-semibold text-white sm:w-auto sm:-px-8' type='submit'>
            Submit
        </button>
    </div>
    </form>
  )
}
