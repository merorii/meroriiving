import { movieResult, movieListResult } from "./interface";

export interface HomePageProps {
  popular: movieResult[];
  topRated: movieResult[];
  nowPlaying: movieResult[];
  upcoming: movieResult[];
}

export interface ContentPageProps {
  params: { id: string };
  content: movieResult;
  similar: movieResult[];
  recommend: movieResult[];
}

export interface ListPageProps {
  params: { type: string };
  result: movieListResult;
}

export interface SearchPageProps {
  result: movieListResult;
  keyword: string;
}
