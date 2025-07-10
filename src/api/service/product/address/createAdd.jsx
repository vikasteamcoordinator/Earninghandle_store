import api from "../../axios/axios_config";

export const addNewAdd = async (data) => {
  console.log(data)
  try { 
    const response = await api.post(`/cart/createAddress`, data);
    return response.data;
  } catch (error) {
    console.error('Error adding address to account:', error);
    throw error;
  }
};


