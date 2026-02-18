"use client"
import { useState, createContext, useContext, ReactNode, useEffect } from "react"

interface User {
	avatar: string
}

const AvatarContext = createContext<User | null>(null)

export default function useAvatar() {
	const context = useContext(AvatarContext)
	if (!context) {
		throw new Error("useAvatar must be used inside AvatarProvider")
	}
	return context
}

export function AvatarProvider({ children }: { children: ReactNode }) {
  const [avatar, setAvatar] = useState("/avatars/default_1.jpg") // fallback
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    setAvatar(`/avatars/default_${randomNumber}.jpg`)
  }, [])

	return (
		<AvatarContext.Provider value={{ avatar }}> {children} </AvatarContext.Provider>
	);
}
