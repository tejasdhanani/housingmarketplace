import axios from "axios";

const API_URL = "/api/houses/";

// Create new house
const createHouse = async (houseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const response = await axios.post(API_URL, houseData, config);

  return response.data;
};

// Get user house
const getMyHouses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get All houses
const getAllHouses = async () => {
  const response = await axios.get(API_URL + "all");

  return response.data;
};

// Delete user house
const deleteHouse = async (houseId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + houseId, config);

  return response.data;
};

const houseService = {
  createHouse,
  getMyHouses,
  getAllHouses,
  deleteHouse,
};

export default houseService;
