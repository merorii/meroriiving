import { useInfiniteQuery } from "react-query";
import { searchMovie } from "src/common/api";
interface Props {
  keyword: string;
  api: ({ page, keyword }: any) => any;
}
export const useInfiniteQueryList = (
  callback: (keyword: string, page: number) => any,
  keyword: any
) => {
  const {
    data,
    fetchNextPage,
    hasNextPage = true,
  } = useInfiniteQuery(
    ["searchDatas"],
    async ({ pageParam }) => {
      console.log(pageParam);
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
