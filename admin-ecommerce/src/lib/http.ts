import { getToken } from "@/utils/user-utils";
import axios from "axios";

// import { getToken, resetLoginData } from "@/utils/utils";

const baseURL: string | undefined = import.meta.env.VITE_BASE_URL;
// console.log("baseUrl", baseURL);
console.log(getToken());
const http = axios.create({
  baseURL,
  timeout: 20000,
});

http.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers["Authorization"] = `${getToken()}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (error.response.status === 401) {
      //   resetLoginData();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default http;
