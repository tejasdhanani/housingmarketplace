import axios from "axios";

const API_URL = "/api/users/";

//Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout
const logout = () => {
  localStorage.removeItem("user");
};

// change Password
const changePassword = async (userData) => {
  const response = await axios.post(API_URL + "changepassword", userData);

  if (response.data) {
    localStorage.removeItem("user");
  }

  return response.data;
};

const authService = {
  register,
  login,
  logout,
  changePassword,
};

export default authService;
