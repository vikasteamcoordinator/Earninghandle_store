import api from "../../axios/axios_config";

export const getADD = async () => {
  try {
    const response = await api.get(`/cart/getAllAddressesUser`);
    // console.log(response.data)
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