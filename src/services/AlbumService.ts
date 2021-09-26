import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://itunes.apple.com/search?term=1989&country=us&entity=album",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("");
  },
};
