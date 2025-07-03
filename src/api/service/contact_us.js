import api from "../config/axios";

export const contactUs = async (payload) => {
  try {
    console.log(payload)
    const response = await api.post("contactUsOpen/createQueryOp", payload);
    console.log("API Response: ", response);
    return response.data;

  } catch (error) {
    console.error("Error during process:", error);
  }
};
