import axios from "axios";

export const getUserFavorites = async (userId, token) => {
  try {
    const response = await axios.get(
      `https://home-quest-app.onrender.com/api/v1/users/${userId}/favorites`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log("error: ", error.response.data);
  }
};
