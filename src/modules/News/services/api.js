import axios from "axios";

const API_KEY = "0bd5d89b6e7a4b48b7d1df0cbab3927e";
export const getNews = (queryStr, dateStr) => {
  let url = `https://newsapi.org/v2/everything?sortBy=popularity&apiKey=${API_KEY}`;
  if (queryStr) {
    url += `&q=${queryStr}`;
    if (dateStr) {
      url += `&${dateStr}`;
    }
  }
  return axios.get(url);
};
