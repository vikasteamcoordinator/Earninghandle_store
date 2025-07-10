import api from "../axios/axios_config";

export const addReview = async (data) => {
  console.log(data)
  try {
    const response = await api.post(`/product/createReview`, data);
    return response.data;
  } catch (error) {
    console.error('Error adding product to cart:', error);
    throw error;
  }
};


