"use client"
import React, { useEffect }  from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import useAuth from '../hooks/useAuth'
import User from '../components/User/User'
import Watching from '../components/Watching/Watching'
const Profile = () => {

    const router = useRouter()
    const { isLoggedIn, username } = useAuth()

    useEffect(() => {
        if(!isLoggedIn) router.push("/login")
    }, [router, isLoggedIn])

    return (
    <>
        <Navbar isloggedin={true}/>
        <div className='bg-[url(@/app/assets/images/Banner.png)] bg-cover bg-center bg-no-repeat w-screen h-[350px] rounded-b-[50px] shadow-2xl pt-[75px]'></div>
        <div className='h-full flex'>
            <User />
            <Watching/>
        </div>
    </>
    )
}

export default Profile