import axios from "axios";

const searchImages = async (output) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ICAXYHEsqvG9MZLBjWekRkInNJldjeyJTfCin4C837U",
    },
    params: {
      query: output,
    },
  });

  return response.data.results;
  
};

export default searchImages;
