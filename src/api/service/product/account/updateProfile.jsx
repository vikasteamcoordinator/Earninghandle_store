import api from "../../axios/axios_config";

export const updateProfile = async (data) => {
  console.log(data)
  try { 
    const response = await api.patch(`/user/updateUserProfile`, data);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};


