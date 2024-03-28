import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import useSearch from '@/hooks/useSearch';
import SongCard from './Card/SongCard';

type Props = {}

const Search = (props: Props) => {
    const [query, setQuery] = useState<string>('');
    const { songs, error, isLoading } = useSearch(query);

    console.log(songs);
    
  
  return (
    <div>
        <form >   
            <label className="mb-2 text-sm font-medium text-gray-300 sr-only dark:text-gray-100">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

                    <CiSearch className="text-gray-400" />
                </div>
                <input 
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="block w-full p-4 ps-10 text-sm text-gray-300 border border-gray-600 rounded-lg bg-gray-800 focus:ring-gray-600 focus:border-gray-600 placeholder-gray-500"
                    placeholder="Search music, singer"
                    required 
                />
               
            </div>
        </form>
        <div className='grid md:grid-cols-4 lg:grid-cols-6 gap-2 py-2'>
            {
                songs?.map((item:any)=>(
                    <SongCard key={item.songId} songId={item.songId} 
                            title={item.title} albumUrl={item.albumUrl}
                            mp3Path={item.mp3Path}  artist={item.artist}
                    >
                        
                    </SongCard>
                ))
            }
        </div>
    </div>
    


  )
}

export default Search