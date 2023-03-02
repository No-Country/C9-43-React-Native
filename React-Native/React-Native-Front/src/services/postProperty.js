import axios from "axios"

export const postProperty = async (data, token) => {
  console.log(token)
  try{
    const response = await axios.post('https://home-quest-app.onrender.com/api/v1/properties', {
      
      body: {
        ...data
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(response)
  } catch (error) {
    console.log(error.response.data)
    return
  }
}