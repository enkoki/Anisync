import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

import notFound from './assets/images/404_text.png'
import SiteLogoD from '@/app/assets/images/anisync_dark.png'
import GoBack from './components/Button/GoBack';

const NotFound = () => {
  return (
    <>
        <header className='min-w-screen h-[75px] py-2 px-25 flex justify-between items-center bg-[#040404] shadow-2xl fixed'>
            <Image src={SiteLogoD} alt="anisync-logo" className='w-13 h-13'/>
            <GoBack/>
        </header>
        <div className='w-screen h-screen'>
                <div className='flex justify-center items-center bg-white h-[850px] w-[1500px] absolute top-[50%] left-[50%] translate-0 -translate-x-1/2 -translate-y-1/2 rounded-[100px] bg-[url(@/app/assets/images/404.png)] '>
                    <Image src={notFound} alt="404 Not Found" className='relative right-[15%]'/>
                </div>
        </div>
    </>
  )
}

export default NotFound