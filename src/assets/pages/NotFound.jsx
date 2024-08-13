import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <h1 className="text-5xl text-white font-bold">404</h1>
      <p className="text-xl text-white">Page not found</p>

      <Link to="/" className="text-white underline mt-5">
        Go back to home
        </Link>
    </div>
  )
}
