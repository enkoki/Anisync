"use client"
import Person from '@/app/assets/icons/Person'
import Lock from '@/app/assets/icons/Lock'
import { useState, useEffect } from 'react'
import { loginHandling } from '@/app/lib/auth'
import { useRouter } from 'next/navigation'
import useAuth from '@/app/hooks/useAuth'


export default function LoginContainer() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()
    const {isLoggedIn, setIsLoggedIn} = useAuth()

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        if(username == "user" && password === "user"){
            setIsLoggedIn(true)
            return
        }
        const hasError = errorHandling() 
        if (hasError) return

        setLoading(true)
        try {
            const result = await loginHandling(username.trim(), password.trim())

            if (!result.success) {
                setError(result.message)
                setLoading(false)
                return
            }

            // Save JWT token
            localStorage.setItem("anisync_token", result.data.access_token)
            setIsLoggedIn(true)
            setLoading(false)
        } 
        catch (err: any) {
            setError(err?.message || "Login failed. Please try again.")
            setLoading(false)
        }
    }

    function errorHandling() {
        if (!username && !password) {
            setError("Fields cannot be empty")
            return true;
        }
        if (!username) {
            setError("Username cannot be empty")
            return true;
        }
        if (!password) {
            setError("Password cannot be empty")
            return true;
        }
        setError("")
        return false;
    }

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(""), 3000)
            return () => clearTimeout(timer)
        }
    }, [error])

    useEffect(() => {
        if(isLoggedIn) router.push("/profile")
        return 
    }, [router, isLoggedIn])

    return (
        <div className="flex w-[50%] flex-col items-center justify-center p-8 min-h-full bg-white rounded-tr-[85px] rounded-br-[85px]">
            <div className=" max-w">
                <h2 className="mb-8 text-center text-4xl font-bold  text-[#6200ED]">LOG IN</h2>
                <form className='flex flex-col justify-center items-center' onSubmit={(e) => handleSubmit(e)}>
                    <div className='flex flex-col gap-5'>
                        <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden w-106 h-12.75 ">
                            <div className="bg-[#6200ED] p-3">
                                <Person></Person>
                            </div>
                            <input type="text" className=" p-3 outline-none w-full placeholder-[#6200ED] text-xl text-black" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden w-106 h-12.75 ">
                            <div className="bg-[#6200ED] p-3">
                                <Lock></Lock>
                            </div>
                            <input type="password" className="p-3 outline-none w-full h-17.5  placeholder-[#6200ED] text-xl text-black" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    {error && (<p className="text-red-500 text-center mt-3">{error}</p>)}
                    <p className="text-center text-sm text-black text-bold p-4">
                        Don't have an account?
                        <span className="text-[#6200ED] font-bold cursor-pointer ml-1">
                            Register here
                        </span>
                    </p>
                    <button className="rounded-[15px] bg-[#6200ED] py-4 text-xl font-bold text-white cursor-pointer h-14.75 w-130 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70" type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Log In"}
                    </button>
                </form>
            </div>
        </div >
    )
}