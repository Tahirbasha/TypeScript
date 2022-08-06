import React, { useState, createContext } from 'react'

export type AuthUser = { 
    name: string
    email: string
}


type UserContextType = { //useState type
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>> //This line is available by hovering on setUser in Provider's value Object
}
type UserContextProviderProps = {
    children: React.ReactNode //To set the typeof childern that is enclosed using the component
}
export const UserContext = createContext({} as UserContextType)
export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null) // Union typing example
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}