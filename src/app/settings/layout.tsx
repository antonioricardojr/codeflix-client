import { Component } from "react"
import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Layout Settings Wrapper</h1>
        {children}
    </div>
  )
}
