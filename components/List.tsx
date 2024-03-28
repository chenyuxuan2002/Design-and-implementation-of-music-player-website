
import React from 'react'
import useCata from '@/hooks/useCata'
import useShowModal from '@/hooks/useShow';
import useSong from '@/hooks/useSong';
import useSongList from '@/hooks/useSongList';
import useUserStore from '@/hooks/useUser';
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import { toast } from 'react-hot-toast';


type Props = {}

function List({}: Props) {

 const {data,isLoading} = useCata()
 const { setCurrentSong } = useSong();
 const { setShow } = useShowModal();
 const {user} = useUserStore()

 const userId = user?.userId
 const {songs,mutate}  = useSongList(userId as number) 
 console.log(songs);
 

 const handleCardClick = (songId:any,title:string,mp3Path:string,albumUrl:string,artist:string) => {
    setCurrentSong({
      id: songId,
      title,
      mp3Path,
      albumUrl,
      artist,
    });

    setShow('player') // 切换到播放器视图
  };


  const handleDelete = async (songId: any) => {
    try {
      // Assuming `userId` is defined somewhere in your code
      const userId = user?.userId; // or however you get the userId
      const res = await axios.delete('/api/song-list', { 
        data: { userId, songId }, // Include the payload in the `data` field
      });
      mutate()
      toast.success(res.data.message);
    } catch (e: any) {
      toast.error(e.message); // Also, there was a typo here; it should be `e.message` not `e.meesage`
    }
  };

 

  return (
    <div>
       {
            <div className='flex flex-col gap-3 cursor-pointer p-2'>
              {
                songs?.map((item:any)=>(
                    <div  
                            key={item.songId} className='items-center flex w-full justify-between hover:bg-neutral-700'>
                        <img  onClick={()=>{handleCardClick(item.songId,item.title,item.mp3Path,item.albumUrl,item.artist)}}
                              src={item.albumUrl} className='w-[140px] h-[70px]' alt=''/>
                         
                        <p>
                            {item.title}
                        </p>
                        <p>
                            {item.artist}
                        </p>

                        <p onClick={()=>{handleDelete(item.songId)}}>
                          <MdDeleteOutline size={30} />
                        </p>
                    </div>
            
                ))
              }
            </div>
      }
    </div>
  )
}

export default List