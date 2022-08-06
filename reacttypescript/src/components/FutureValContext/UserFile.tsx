import { useContext } from 'react'
import { UserContext } from './UserContext'


export const UserComp= () => {
    const userContext = useContext(UserContext) // The UserContext value is AuthUser and null sometimes
    const handleLogin = () => {
        userContext.setUser({
              name: 'Vishwas',
            email: 'vishwas@example.com',
        })
      
  }
    const handleLogout = () => {
        userContext.setUser(null)
 
 }
return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is{userContext.user?.name}</div> {/*? is to prevent error when user value is null*/ }
        <div>User email is{userContext.user?.email}</div>
    </div>
)
}