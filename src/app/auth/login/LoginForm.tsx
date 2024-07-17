"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthForm from '../../components/AuthForm';

type ServerError = {
  message: string;

}

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors ] = useState<string[]>([]);
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');


    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      console.log('response: ', response);
      if (response.ok) {
        //TODO redirect to homepage
        router.push('/');
        return;
      }

      const payload: ServerError[]  = await response.json();
      setErrors(payload.map((error) => error.message));
      console.log(errors);
    } catch (error) {
      console.log(error);
      setErrors(['An unknown error occurred.'])
    }

  };

  return (<AuthForm formType='login' onSubmit={handleSubmit}/>);
}
