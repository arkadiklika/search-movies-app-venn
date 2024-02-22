import axios from "axios";

export const fetchMovies = async (title, page) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_MOVIES_API}/search/?Title=${title}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
