import useSWR from 'swr'
import fetcher from '@/utils/fetcher'


const useCata = ()=>{
    const url = '/api/cata'
    const {data,error,isLoading,mutate} = useSWR(url,fetcher)
    return {
        data,error,isLoading,mutate
    }
}
export default useCata