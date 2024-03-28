import useSWR from 'swr';
import fetcher from '@/utils/fetcher';


const useSongList = (userId: number) => {
  const { data, error, isLoading,mutate } = useSWR(userId ? `/api/song-list/${userId}` : null, fetcher);
  return {
    songs: data,
    error,
    isLoading: isLoading,
    mutate
  };
};

export default useSongList;