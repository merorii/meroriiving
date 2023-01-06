export interface movieListResult {
  page: number;
  results: Array<movieResult>;
  total_pages: number;
  total_results: number;
}

export interface movieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_countries?: productionCountry[];
  runtime?: string;
  genres?: genre[];
  crew?: crew[];
  cast?: crew[];
  tagline?: string;
}

export interface genre {
  id: number;
  name: string;
}

export interface crew {
  adult: boolean;
  cast_id?: number;
  character?: string;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  order?: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface productionCompany {
  id: number;
  logo_path?: string;
  name?: string;
}

export interface productionCountry {
  iso_3166_1: string;
  name: string;
}

export interface TypeProps {
  [key: string]: movieResult[];
  popular: movieResult[];
  top_rated: movieResult[];
  now_playing: movieResult[];
  upcoming: movieResult[];
}

export interface InfiniteDataProps {
  data: movieResult[];
  total: number;
  page: number;
}
