import { useInfiniteQuery } from "react-query";
import { searchMovie } from "src/common/api";

export const useInfiniteQueryList = (keyword: string) => {
  const {
    data,
    fetchNextPage,
    hasNextPage = true,
  } = useInfiniteQuery(
    ["searchDatas"],
    async ({ pageParam }) => {
      const data = await searchMovie({
        page: pageParam || 1,
        keyword: keyword,
      });
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
