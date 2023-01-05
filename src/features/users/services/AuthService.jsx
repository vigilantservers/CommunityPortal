import axios from "axios";
import Cookies from "js-cookie";
import config from "../../../config";

const API_URL = config.apiBaseUrl + "/auth";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      const { data } = response;
      const { accessToken, refreshToken, user } = data.data;
      Cookies.set("accessToken", accessToken);
      Cookies.set("refreshToken", refreshToken);
      Cookies.set("user", user);
      return data;
    });
};

const logout = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  Cookies.remove("user");
};

const getCurrentUser = () => {
  return Cookies.get("user");
};

const AuthService = () => {
  register, login, logout, getCurrentUserl;
};

export default AuthService;
