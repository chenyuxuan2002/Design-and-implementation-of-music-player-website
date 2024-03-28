import useSWR from 'swr';
import fetcher from '@/utils/fetcher';


const useSearch = (query: string) => {
  const { data, error, isLoading } = useSWR(query ? `/api/search/${query}` : null, fetcher);
  return {
    songs: data,
    error,
    isLoading: isLoading,
  };
};

export default useSearch;