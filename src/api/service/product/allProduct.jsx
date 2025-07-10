import api from "../../config/axios";

export const getAllProducts = async (
  colour,
  productCategory,
  maxPrice,
  minPrice,
  size,
  brand,
  gender
) => {
  try {
    const queryParams = Object.fromEntries(
      Object.entries({
        colour,
        productCategory,
        maxPrice,
        minPrice,
        size,
        brand,
        gender
      }).filter(([_, value]) => 
        value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0)
      ).map(([key, value]) => [
        key,
        Array.isArray(value)
          ? value.map(item => (typeof item === "string" ? item.toLowerCase() : item))
          : typeof value === "string"
          ? value.toLowerCase()
          : value
      ])
    );

    const response = await api.get("/store/allStoreCampaigns");

    return response.data;
  } catch (error) {
    console.error("Error fetching filtered products:", error);
    return null;
  }
};
