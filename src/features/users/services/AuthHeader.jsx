import Cookies from "js-cookie";

const AuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = Cookies.get("accessToken");

  if ((user && user.accessToken) || accessToken) {
    return { Authorization: "Bearer " + (user.accessToken || accessToken) };
  } else {
    return {};
  }
};

export default AuthHeader;
