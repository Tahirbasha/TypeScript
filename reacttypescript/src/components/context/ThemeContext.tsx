import React, { createContext } from 'react'
import { theme } from './theme'
type ThemeContextProviderProps = { children: React.ReactNode }

export const ThemeContext = createContext(theme)
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    console.log(children)
    return <ThemeContext.Provider value = { theme } > { children }</ThemeContext.Provider>
}
//The component ThemeContextProvider is passed to app.tsx and the components which are enclosed
//using this component becomes children to ThemeContextProvider so they can access the "Value" 
// key of ThemeContext.Provider