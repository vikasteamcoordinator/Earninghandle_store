import api from '../config/axios';

export const allFeed = async () => {
  try {
    const response = await api.get(`customerFeedback/getAllFeedbacks`);
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