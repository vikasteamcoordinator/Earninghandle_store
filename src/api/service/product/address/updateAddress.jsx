import api from "../../axios/axios_config";

export const updateAdd = async (id, data) => {
  console.log(data)
  try { 
    const response = await api.patch(`/cart/updateAddress/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Error adding address to account:', error);
    throw error;
  }
};


