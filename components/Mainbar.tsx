"use client"
import Player from '@/components/Player'

import { FaHeart } from "react-icons/fa";
import LoginModal from './Modal/LoginModal';
import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import RegisterModal from './Modal/RegisterModal';

import { useState } from 'react';
import axios from 'axios';
import fetcher from '@/utils/fetcher';
import Catagory from './Catagory';
import useShowModal from '@/hooks/useShow';
import useSong from '@/hooks/useSong';
import Search from './Search';
import useUserStore from '@/hooks/useUser';
import useUserSongs from '@/hooks/useUserSongs';
import Library from './Library';
import Upload from './Upload';
import List from './List';

interface Song {
  id: number;
  title: string;
  mp3Path: string;
  albumUrl:string;
  artist:string;
}


const Mainbar = () => {
  const {onOpen} = useLoginModal()
  const {onOpen:onRegisterOpen} = useRegisterModal()
  const { category, player, search,library, setShow,upload,list } = useShowModal();
  
  const { currentSong, setCurrentSong } = useSong();
  const {user,logout} = useUserStore()
  const {userSongs} = useUserSongs(user?.userId as number)

  
  

 

  const handleNextSong = async() =>{
    const nextSong = (await axios.get(`api/songs/${currentSong.id}/next`)).data

    
    setCurrentSong({
      id:nextSong.songId,
      mp3Path:nextSong.mp3Path,
      title:nextSong.title,
      albumUrl:nextSong.albumUrl,
      artist:nextSong.artist
    })
  }
  
  const handlePreviousSong = async (): Promise<void> => {
    const prveSong = (await axios.get(`api/songs/${currentSong.id}/next`)).data
    console.log(prveSong);
    
    setCurrentSong({
      id:prveSong.songId,
      mp3Path:prveSong.mp3Path,
      title:prveSong.title,
      albumUrl:prveSong.albumUrl,
      artist:prveSong.artist
    })
  };

  return (
    <div className='bg-neutral-900 w-full h-screen p-2 overflow-scroll'>
        <div className=' h-fit bg-gradient-to-b from-emerald-800 p-6 rounded-md'>
          <div className='flex gap-4 justify-end'>
            {
              user ? 
              <div className='flex items-center gap-5 text-lg'>
                <p className=' text-neutral-200'>
                  {user.username}
                </p>
                <button onClick={logout}
                        className=' text-neutral-300 text-lg'>
                    Log out 
                </button>
              
              </div>
              
              :
              <>
                <button onClick={()=>onRegisterOpen()}
                    className=' text-neutral-300 text-lg'>
                  Sign up
                </button>

                <button onClick={()=>onOpen()}
                        className=' bg-white text-lg text-black px-6 py-2 rounded-full'>
                  Log in
                </button>
              </>
              
            }
            
          </div>

          <p className=' text-3xl font-bold'>
            Welcome back
          </p>

          <div className='flex mt-4'>
            <div className='bg-gradient-to-b from-purple-500 p-4 rounded-md'>
              <FaHeart size={24} className = "text-white"/>
            </div>

            <button   onClick={() => setShow('library')}
                      className='p-4 rounded-md bg-slate-800 opacity-90 w-48 hover:opacity-50'>
              Liked Songs
            </button>
        
          </div>
        </div>

       
        <LoginModal />
        <RegisterModal/>
      

        {
        player && 
        <Player
            img={currentSong.albumUrl}
            title={currentSong.title}
            artist={currentSong.artist}
            song={currentSong.mp3Path}
            songId={currentSong?.id}
            userId={user?.userId as number}
            onNextSong={handleNextSong}
            onPreviousSong={handlePreviousSong}
          />
        }

        {
          category && 
          <Catagory />
        }

        {
          search && <Search/>
        }

        {
          library && <Library/>
        }

        {
          upload && <Upload/>
        }
        {
          list && <List/>
        }
      

    </div>
  )
}

export default Mainbar