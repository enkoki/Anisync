import Link from 'next/link'
import React from 'react'

const GoBack = () => {
  return (
    <Link 
        href="/" 
        className='flex justify-center items-center font-bold text-xl border-3 border-[#6200ED] py-2 px-6 rounded-xl transition-opacity duration-300 hover:bg-[#6200ED] active:opacity-75'>
        Go Back
    </Link>
  )
}

export default GoBack