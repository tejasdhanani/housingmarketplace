import axios from "axios";

const API_URL = "/api/houses/";

// Create new goal
const createHouse = async (houseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, houseData, config);

  return response.data;
};

const houseService = {
  createHouse,
};

export default houseService;
