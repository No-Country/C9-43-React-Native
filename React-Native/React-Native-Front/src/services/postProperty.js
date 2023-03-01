import axios from "axios"

export const postProperty = async (data) => {
  try{
    const response = await axios.post('https://home-quest.onrender.com/api/v1/properties', data)
    console.log(response)
  } catch (error) {
    console.log(error.response.data)
    return
  }
}