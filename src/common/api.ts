import axios from "axios";

export const getMovieList = async (list: string, page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${list}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=ko-KR&page=${page}`
  );
  return data;
};

export const getMovieInfo = async (id: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=ko-KR`
  );
  return data;
};

export const getSimilar = async (id: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=ko-KR`
  );
  return data;
};

export const getRecommendations = async (id: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=ko-KR`
  );
  return data;
};

export const getCredits = async (id: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=ko-KR`
  );
  return data;
};

export const searchMovie = async (keyword: string | string[], page = 1) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&language=ko-KR&query=${keyword}&page=${page || 1}`
  );
  return data;
};
