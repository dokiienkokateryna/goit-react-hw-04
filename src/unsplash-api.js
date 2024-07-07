import axios from "axios";

export default async function fetchImages(query, page = 1) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID eDuq9bT5mQFTszpYqjZmkZ9ic0bXVxQzr9FXhtUCl0o",
    },
  });
  return response;
}
