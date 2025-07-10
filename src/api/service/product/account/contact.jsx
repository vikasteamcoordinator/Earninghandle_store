import api from "../../axios/axios_config";

export const contactUs = async (data) => {
  console.log(data)
  try { 
    const response = await api.post(`/query/createQuery`, data);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};


