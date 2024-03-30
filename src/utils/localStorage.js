import axios from "axios";

export const getFromApi = async (url) => {
  const [value] = (await axios.get(url)).data;
  return value;
};
