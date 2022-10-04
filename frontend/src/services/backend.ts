import axios from "axios";

 const baseUrl = 'http://localhost:8080'

export const getApi = (param: string) => {
  return `${baseUrl}${param}`
}

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }
});
