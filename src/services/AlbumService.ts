import axios from "axios";

const apiClient = axios.create({
  baseURL: "",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(url: string) {
    return apiClient.get(url);
  },
};
