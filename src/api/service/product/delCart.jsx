import api from "../../config/axios";

export const delCart = async (productId,data) => {
  try {
    const response = await api.put(`store/removeProductFromCart/${productId}`,data, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error deleting product to cart:', error);
    throw error;
  }
};


