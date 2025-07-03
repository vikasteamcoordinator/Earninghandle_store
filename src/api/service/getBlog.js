import api from '../config/axios';

export const getBlog = async (id) => {
  try {
    console.log(id)
    const response = await api.get(`store/blog/getBlog/${id}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Server responded with an error:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }
    throw error;
  }
};