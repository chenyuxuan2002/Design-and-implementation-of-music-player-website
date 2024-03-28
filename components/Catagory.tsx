
import React from 'react'
import useCata from '@/hooks/useCata'
import SongCard from './Card/SongCard'

type Props = {}

function Catagory({}: Props) {

 const {data,isLoading} = useCata()
 console.log(data);
 
 

  return (
    <div>
      {
        data?.map((item:any,index:number)=>(
          <div className=' text-neutral-200 text-xl py-2 p-2' key={index}>
            {item.genre}

            <div className='grid md:grid-cols-4 lg:grid-cols-6 gap-2 py-2'>
              {
                item.songs.map((item:any)=>(

                  <SongCard key={item.songId} songId={item.songId} 
                            title={item.title} albumUrl={item.albumUrl}
                            mp3Path={item.mp3Path}  artist={item.artist}
                  />
                      
           
                ))
              }
            </div>
            
          </div>
        )
        )
      }
    </div>
  )
}

export default Catagory