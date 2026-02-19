import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import pfp from '@/app/assets/images/profilepic.png'
import Dropdown from './Dropdown'
import useAvatar from '@/app/hooks/useAvatar'
import useAuth from '@/app/hooks/useAuth'

const LoggedIn = () => {
  const { avatar } = useAvatar()
  const {username} = useAuth()
  return (
    <div className='flex justify-center items-center gap-5'>
        <p className='font-bold text-[18px]'>{username}</p>
        <Image width="40" height="40" src={avatar} alt="user profile picture" className='rounded-full w-10 h-10'></Image>
        <Dropdown />
    </div>
  )
}

export default LoggedIn