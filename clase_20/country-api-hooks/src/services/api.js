import axios from "axios";

const countriesAPI = axios.create({
  baseURL: "https://restcountries.com/v2/",
  timeout: 10000,
});

export { countriesAPI };
