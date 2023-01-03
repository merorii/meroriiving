export interface genre {
  id: number;
  name: string;
}

export interface productionCompany {
  id: number;
  logo_path?: string;
  name?: string;
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
}
