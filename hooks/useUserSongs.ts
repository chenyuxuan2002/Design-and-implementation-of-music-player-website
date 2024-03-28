import useSWR from 'swr';
import fetcher from '@/utils/fetcher';


const useUserSongs = (userId: number) => {
  const { data, error, isLoading } = useSWR(userId ? `/api/user-songs/${userId}` : null, fetcher);
  return {
    userSongs: data,
    error,
    isLoading: isLoading,
  };
};

export default useUserSongs;