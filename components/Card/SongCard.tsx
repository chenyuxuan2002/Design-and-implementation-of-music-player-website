
"use client"
import React from 'react'
import useSong from '@/hooks/useSong'
import useShowModal from '@/hooks/useShow';
import { IoMdAddCircle } from "react-icons/io";
import useUserStore from '@/hooks/useUser';
import axios from 'axios';
import toast from 'react-hot-toast';


type Props = {
    mp3Path: string,
    title: string,
    albumUrl: string,
    songId: number,
    artist: string
};

function SongCard({ albumUrl, title, mp3Path, songId, artist }: any) {
    const { setCurrentSong } = useSong();
    const { setShow } = useShowModal();
    const {user} = useUserStore()
    

    
    const handleAddToList = async()=>{
      try{
        const userId = user?.userId
        const res = await axios.post('/api/song-list', { userId, songId });
        toast.success(res.data.message)
      } catch (error) {
        toast.error('Failed to update like status');
      }
    }
    const handleCardClick = () => {
      setCurrentSong({
        id: songId,
        title: title,
        mp3Path: mp3Path,
        albumUrl: albumUrl,
        artist:artist
      });

      setShow('player') 
    };

    return (
      <div className='p-2 h-[300px] bg-neutral-800 relative hover:cursor-pointer hover:bg-neutral-900 rounded-sm' >
          <img  onClick={handleCardClick}
                className='w-full h-[150px] object-cover' alt={title} src={albumUrl || '/sc.png'} />
  
          <p className='text-white text-sm py-2'>
              {title}
          </p>
          <p className='text-neutral-200 text-sm py-1'>
              {artist}
          </p>

          <button onClick={handleAddToList}
                  className='absolute bottom-2'>
            <IoMdAddCircle size={30}/>
          </button>

      </div>
    );
}

export default SongCard