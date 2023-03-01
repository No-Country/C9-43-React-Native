import { createContext, useState } from "react"

export const publishPostInitialState = {
  userId: null,
  title: '',
  description: '',
  pictures: [],
  price: null,
  city: '',
  region: '',
  address: '',
  sqMeters: null,
  ambiances: null,
  bedrooms: null,
  bathrooms: null,
  antiquity: null,
  propertyType: '',
  businessType: '',
  parking: false,
  phone: '',
}

export const PublishPostContext = createContext()

export const PublishPostProvider = ({ children }) => {
  const [publishPost, setPublishPost] = useState(publishPostInitialState)

  const handlePublishPost = (name, value) => {
    setPublishPost({...publishPost, [name]: value})
  }

  const value = {publishPost, handlePublishPost}

  return(
    <PublishPostContext.Provider value={value}>
      { children }
    </PublishPostContext.Provider>
  )
}