import useSWR from 'swr';
import fetcher from '@/utils/fetcher';


const useLikedSongs = (userId: number) => {
  const { data, error, isLoading } = useSWR(userId ? `/api/liked-songs/${userId}` : null, fetcher);
  return {
    songs: data,
    error,
    isLoading: isLoading,
  };
};

export default useLikedSongs;