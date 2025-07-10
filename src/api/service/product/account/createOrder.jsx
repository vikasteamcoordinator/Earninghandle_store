import api from "../../axios/axios_config";

export const addNewOrd = async (data) => {
  console.log(data)
  try { 
    const response = await api.post(`/cart/createOrder`, data);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};


