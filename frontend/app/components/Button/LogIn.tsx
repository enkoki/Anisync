import Link from 'next/link'
import React from 'react'

const LogIn = () => {
  return (
    <Link href="/login" className='flex justify-center items-center font-bold text-xl bg-[#6200ED] py-2 px-6 rounded-xl transition-opacity duration-300 hover:opacity-85 active:opacity-75'>Log In</Link>
  )
}

export default LogIn