import { useState } from "react"

export const usePublishPost = () => {
  const [post, setPost] = useState({
    userId: '',
    title: '',
    description: '',
    price: null,
    pictures: [],
    city: '',
    region: '',
    sqMeters: null,
    ambiances: null,
    bedrooms: null,
    antiquity: null,
    propertyType: '',
    businessType: '',
    parking: null
  })


  const handlePost = (name, value) => {
    setPost({
      ...post,
      [name]: value
    })
  }


  return {
    post, handlePost
  }

}