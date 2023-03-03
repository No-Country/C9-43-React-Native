import { createContext, useState } from "react"

export const publishProgressInitialState = {
  propertyType: 0,
  description: 0,
  location: 0,
  ambiances: 0,
  characteristics: 0,
  price: 0,
  pictures: 0,
  contact: 0
}

export const PublishProgressContext = createContext()

export const PublishProgressProvider = ({ children }) => {
  const [publishProgress, setPublishProgress] = useState(publishProgressInitialState)

  const handlePublishProgress = (name, value) => {
    if(publishProgress.name > 0) {
      return
    }
    setPublishProgress({...publishProgress, [name]: value})
  }

  const handleResetProgress = () => {
    setPublishProgress(publishProgressInitialState)
  }

  const value = { publishProgress, handlePublishProgress, handleResetProgress }

  return(
    <PublishProgressContext.Provider value={value}>
      { children }
    </PublishProgressContext.Provider>
  )
}