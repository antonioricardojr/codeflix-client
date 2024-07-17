import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Layout Settings Wrapper</h1>
        {children}
    </div>
  )
}
