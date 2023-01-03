import axios from "axios";

export const getMovieList = async (list: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${list}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=KO`
  );
  return data;
};

export const getMovieInfo = async (id: any) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=KO`
  );
  return data;
};

export const getSimilar = async (id: any) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=KO`
  );
  return data;
};
