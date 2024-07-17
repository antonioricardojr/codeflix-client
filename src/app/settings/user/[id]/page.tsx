"use client"
import { notFound } from 'next/navigation';
import React from 'react'
import { getUserById } from '../../settings';

async function User({params}:{params: {id: string}}) {
    const {name, id, username, website} = await getUserById(params.id);

    if (!name) {
        notFound();
    }

    return (
      <div>
        <h1 className='text-2xl font-bold'>User</h1>
        <div className='
          border
          border-dashed
          border-red-500
          p-4
        '>
          <p>Name: {name}</p>
          <p>Id: {id}</p>
          <p>Username: {username}</p>
          <p>Website: {website}</p>
        </div>
      </div>
    )
  }


  export default User;