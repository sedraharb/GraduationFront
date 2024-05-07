import * as React from "react";
import getConfig from "next/config";
import axios from "axios";
import Cookies from "js-cookie";

import { responseErrorHandlers } from "../../wrappers";
import axiosInstance from "../../utils/auth/axiosInstance";

const { publicRuntimeConfig } = getConfig();

const USERS_URL = "api/users";
const BASE_URL = `${publicRuntimeConfig.apiUrl}`;

const getAll = async (params) => {
  try {
    return await axiosInstance
      .get(`${BASE_URL}${USERS_URL}`, { params })
      .then(async (response) => {
        return await response?.data?.body;
      });
  } catch (error) {
    responseErrorHandlers(error?.response);
  }
};

export const users = {
  getAll,
};
