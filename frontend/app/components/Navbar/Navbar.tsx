"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

import SiteLogoL from '@/app/assets/images/anisync_light.png'
import SiteLogoD from '@/app/assets/images/anisync_dark.png'
import LogIn from '../Button/LogIn';
import LoggedIn from '../LoggedIn/LoggedIn';
const Navbar = ({isloggedin = false}) => {

    const pathname = usePathname();

    return (
    <header className='min-w-screen h-[75px] py-2 px-25 flex justify-between items-center bg-[#040404] shadow-2xl fixed'>
        <Image src={SiteLogoD} alt="anisync-logo" className='w-13 h-13'/>
        <nav>
            <ul className='flex gap-10 font-bold text-[20px] justify-center items-center'>
                <li ><Link href="/about">About</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li className={pathname === '/' ? 'text-[#6200ED]' : ''}><Link href="/home">Home</Link></li>
            </ul>
        </nav>
        {isloggedin ? <LoggedIn/> : <LogIn/>}
    </header>
    );
}

export default Navbar