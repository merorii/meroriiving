import { useInfiniteQuery } from "react-query";
import { movieListResult } from "src/type";

export const useInfiniteQueryList = (
  callback: (keyword: string, page: number) => Promise<movieListResult>,
  keyword: string
) => {
  const {
    data,
    fetchNextPage,
    hasNextPage = true,
  } = useInfiniteQuery(
    ["searchDatas"],
    async ({ pageParam }) => {
      const data = await callback(keyword, pageParam || 1);
      return {
        data: data.results,
        total: data.total_pages,
        page: data.page,
      };
    },
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.total > lastPage.page) {
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
    data,
    fetchNextPage,
    hasNextPage,
  };
};
