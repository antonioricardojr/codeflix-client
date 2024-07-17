"use client"
import React from 'react';
import AuthForm from '../../components/AuthForm';

export default function RegisterForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('submit from register');
    e.preventDefault();
  };

  return (<AuthForm formType='register' onSubmit={handleSubmit}/>);
}
