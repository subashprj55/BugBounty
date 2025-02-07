import axios from "axios";

export const axiosAuth = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
