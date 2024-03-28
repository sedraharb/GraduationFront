import getConfig from "next/config";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

import axiosInstance from "../../../utils/auth/axiosInstance";

import { responseErrorHandlers } from "../../../wrappers";

const { publicRuntimeConfig } = getConfig();
// const router = useRouter();

const LOGIN_URL = "api/login";
const LOGOUT_URL = "api/logout";
const BASE_URL = `${publicRuntimeConfig.apiUrl}`;

const login = async (login) => {
  try {
    return await axios
      .post(`${BASE_URL}${LOGIN_URL}`, login)
      .then(async (response) => {
        const result = await response?.data;
        const token = result?.body?.token;
        const profile = JSON.stringify(result?.body?.auth);
        Cookies.set("auth-token", token);
        localStorage.setItem("profile", profile);
        return {
          data: result,
          status: response?.status,
        };
      });
  } catch (error) {
    responseErrorHandlers(error?.response);
  }
};

const logout = async () => {
    try {
      const response = await axiosInstance.post(`${BASE_URL}${LOGOUT_URL}`);
      
      if (response.status === 200) {
        Cookies.remove("auth-token");
        localStorage.removeItem("profile");
      }
  
      return {
        status: response.status,
      };
    } catch (error) {
      responseErrorHandlers(error?.response);
      return {
        status: 422,
        errors: error,
      };
    }
  };

export const authServices = {
  login,
  logout,
};
