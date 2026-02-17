"use client"
import { useState, createContext, useContext, ReactNode, useEffect } from "react"

interface User {
	isLoggedIn: boolean
	username: string
	authLoading: boolean
}

interface AuthContextType extends User {
	setIsLoggedIn: (val: boolean) => void
	setUsername: (name: string) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error("useAuth must be used inside AuthProvider")
	}
	return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [username, setUsername] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [authLoading, setAuthLoading] = useState(true)

	useEffect(() => {
		const token = localStorage.getItem("anisync_token")
		if (token) setIsLoggedIn(true);
		setAuthLoading(false)
	}, [])

	return (
		<AuthContext.Provider value={{ username, isLoggedIn, authLoading, setIsLoggedIn, setUsername}}> {children} </AuthContext.Provider>
	);
}
