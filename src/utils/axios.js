import axios from "axios";

const instance = axios.create({
  baseURL: "https://dog.ceo",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
