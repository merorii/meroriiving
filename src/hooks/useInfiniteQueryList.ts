import { useInfiniteQuery } from "react-query";
import { movieListResult } from "src/types";

export const useInfiniteQueryList = (
  callback: (keyword: string, page: number) => Promise<movieListResult>,
  keyword: string
) => {
  const {
    data: pages,
    fetchNextPage,
    hasNextPage = true,
  } = useInfiniteQuery(
    ["searchDatas"],
    async ({ pageParam }) => {
      const res = await callback(keyword, pageParam || 1);
      return {
        data: res.results,
        total_pages: res.total_pages,
        total_result: res.total_results,
        page: res.page,
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.total_pages > lastPage.page) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return {
    pages,
    fetchNextPage,
    hasNextPage,
  };
};
