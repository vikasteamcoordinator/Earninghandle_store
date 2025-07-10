import api from "../../config/axios";

export const addProductToCart = async (productId, data) => {
  console.log(data);
  console.log("id", productId);
  try {
    const response = await api.post(
      `/store/addProductInCart/${productId}`,
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};
