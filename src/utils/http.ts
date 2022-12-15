import axios from "axios";
import { config } from "../config";

const http = axios.create({
  baseURL: config?.REST_API_ENDPOINT,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
