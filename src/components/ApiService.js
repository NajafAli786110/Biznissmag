// api.js
import axios from "axios";

const API_BASE_URL = "https://biznismag.com/wp-json/wp/v2";

export const fetchFeaturedArticles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    const extractedData = response.data.map((post) => ({
      title: post.title.rendered,
      exercepts: post.excerpt.rendered,
      id: post.id,
    }));
    return extractedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
