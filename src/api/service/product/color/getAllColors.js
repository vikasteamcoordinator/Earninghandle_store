import axios from 'axios';

const baseURL = 'https://ehbackendmain.onrender.com';

export const getAllColors = async () => {
  try {
    const response = await axios.get(
      `${baseURL}/store/getAllregisteredColors`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    const errMsg = error.response?.data?.message || error.message;
    console.error("Error fetching colors:", errMsg);
    throw new Error(errMsg);
  }
};