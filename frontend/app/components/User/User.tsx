import Image from 'next/image'
import React from 'react'
import pfp from '@/app/assets/images/profilepic.png'
import EditProfile from '../Button/EditProfile'
import TrackList from '../Button/TrackList'
const User = () => {
  return (
    <div className='flex flex-col min-w-max justify-center items-center p-8 relative bottom-20 h-max'>
        <Image src={pfp} alt="profile picture" className='rounded-full shadow-2xl'></Image>
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className='text-[32px] font-bold w-max'>Enko</div>
            <div className='flex justify-between items-center gap-5 font-bold text-[#4A4A4A]'>
                <span>8 Followers</span>
                <span>12 Following</span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span>It's unprofessional to not use an anime pfp</span>
                <span>- Sun Tzu</span>
            </div>
            <div className='text-center font-bold text-[#4A4A4A]'>View Anime Tracking</div>
            <div className='flex gap-5 w-full'>
                <TrackList content='Anime List'/>
                <TrackList content='Manga List'/>
            </div>
            <EditProfile/>
        </div>
    </div>
  )
}

export default User