import axios from "axios";
import { transformData } from "../helpers/helpers";

const base = "https://api.unsplash.com";
const access_key = "eDuq9bT5mQFTszpYqjZmkZ9ic0bXVxQzr9FXhtUCl0o";

export async function fetchPhotos(searchString, page) {
  const response = await axios.get(`${base}/search/photos`, {
    params: {
      client_id: access_key,
      page,
      per_page: 12,
      query: searchString.toLowerCase(),
    },
  });
  return transformData(response.data.results);
}
