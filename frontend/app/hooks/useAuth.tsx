"use client"
import { useState, createContext, useContext, ReactNode } from "react"

interface User {
  isLoggedIn: boolean
  username: string
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
  const [username, setUsername] = useState("Guest")
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <AuthContext.Provider value={{ username, isLoggedIn, setIsLoggedIn, setUsername }}> {children} </AuthContext.Provider>
  );
}
