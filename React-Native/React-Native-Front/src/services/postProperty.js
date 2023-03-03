import axios from "axios"

export const postProperty = async (data, token, handleToggleModal, setIsError) => {
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
    handleToggleModal()
  } catch (error) {
    setIsError(true)
    console.log(error.response.data)
  }
}