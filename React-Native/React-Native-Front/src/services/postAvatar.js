import axios from "axios"

export const postAvatar = async (data, userId, token) => {
  
    try{
      const response = await axios.put(`https://home-quest-app.onrender.com/api/v1/users/${userId}`, {
        body: {
          profilePicture: data
        }
        ,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('Respuesta: ', response)
      // return response
    } catch (error) {
      console.log('error: ', error.response)
    }
}