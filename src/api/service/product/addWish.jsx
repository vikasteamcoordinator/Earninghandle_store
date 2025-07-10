import api from "../../config/axios";

export const addToWishlist = async (productId) => {
  console.log("id", productId);
  try {
    const response = await api.post(
      `/store/addProductInWishList/${productId}`,
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    throw error;
  }
};
