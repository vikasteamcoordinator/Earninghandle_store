import api from "../../config/axios";

export const delWish = async (productId) => {
  console.log("id", productId)
  try {
    const response = await api.put(`/store/removeProductFromWishlist/${productId}`,{}, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error deleting product in wishlist:', error);
    throw error;
  }
};


