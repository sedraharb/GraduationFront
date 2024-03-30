import getConfig from "next/config";

import {responseErrorHandlers} from "../../wrappers";
import axiosInstance from "../../utils/auth/axiosInstance";

const {publicRuntimeConfig} = getConfig();

const COMPLETED_DEVICES_URL = 'api/completed_devices';
const BASE_URL = `${publicRuntimeConfig.apiUrl}`;

const getAll = async (params) => {
    try {
        return await axiosInstance.get(`${BASE_URL}${COMPLETED_DEVICES_URL}`,{params}).then(async response => {
            return await response?.data?.body
        });
    } catch (error) {
        responseErrorHandlers(error?.response)
    }
};


export const completedDevices = {
    getAll
};