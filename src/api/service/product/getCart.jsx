import api from "../../config/axios";

export const allCart = async () => {
  try {
    const response = await api.get(`/store/getCart`, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server responded with an error:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
    throw error;
  }
};