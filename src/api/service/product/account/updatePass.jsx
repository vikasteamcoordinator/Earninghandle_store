import api from "../../axios/axios_config";

export const updatePass = async (data) => {
  console.log(data)
  try { 
    const response = await api.post(`/user/changeUserPassword`, data);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};


