"use client"
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const Profile = () => {

    const router = useRouter()
    const loggedIn = true;

    useEffect(() => {
        if(!loggedIn) router.push("/login")
    }, [router, loggedIn])

    return (
    <>
        <Navbar isloggedin={true}/>
    </>
    )
}

export default Profile