import axios from "axios";

export const getEmployees = () => {
  return axios.get(`https://mocki.io/v1/4b8fe8d1-24d0-49f4-8214-66ea2fd3e5ea`);
};
