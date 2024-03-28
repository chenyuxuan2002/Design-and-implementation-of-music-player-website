import useLikedSongs from '@/hooks/useLikedSongs'
import useUserStore from '@/hooks/useUser'
import React from 'react'
import SongCard from './Card/SongCard'

type Props = {}

const Library = (props: Props) => {
    const {user} = useUserStore()
    console.log(user?.userId);
    
    const {songs} = useLikedSongs(user?.userId as number)
    console.log(songs);
    
  return (
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
  )
}

export default Library