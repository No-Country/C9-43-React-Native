import { createContext, useState } from "react"

export const UserCredentialsContext = createContext()

export const UserCredentialsProvider = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState({})

  const handleUserCredentials = (credentials) => {
    setUserCredentials(credentials)
  }

  const value = { userCredentials, handleUserCredentials }

  return(
    <UserCredentialsContext.Provider value={value}>
      { children }
    </UserCredentialsContext.Provider>
  )
}