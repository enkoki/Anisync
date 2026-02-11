import Image from 'next/image'
import React from 'react'
import pfp from '@/app/assets/images/profilepic.png'
import Dropdown from './Dropdown'

const LoggedIn = () => {
  return (
    <div className='flex justify-center items-center gap-5'>
        <p className='font-bold text-[18px]'>Enko</p>
        <Image src={pfp} alt="user profile picture" className='rounded-full w-10 h-10'></Image>
        <Dropdown />
    </div>
  )
}

export default LoggedIn