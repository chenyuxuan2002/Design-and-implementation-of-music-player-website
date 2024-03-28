"use client"

import React, { useEffect, useState } from "react";
//@ts-ignore
import useSound from "use-sound";
import { MdOutlineDelete } from "react-icons/md";

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import useUserSongs from "@/hooks/useUserSongs";
import useUserStore from "@/hooks/useUser";

// Define a type for the time state
type TimeState = {
  min: string;
  sec: string;
};

type Props = {
  img?: string;
  song?: string;
  title: string;
  artist:string;
  onNextSong: () => void;
  onPreviousSong: () => void;
  songId:number;
  userId:number;

}
const Player:React.FC<Props> = ({img,song,title,artist,userId,songId,onNextSong,onPreviousSong}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<TimeState>({ min: "", sec: "" });
  const [currTime, setCurrTime] = useState<TimeState>({ min: "", sec: "" });

  // If you know the specific type for seconds, replace 'any' with that type
  const [seconds, setSeconds] = useState<any>();

  const [play, { pause, duration, sound }] = useSound(song);
  
  const {userSongs} = useUserSongs(userId as number)
  const {user} = useUserStore()

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedSong = userSongs?.find((song: { songId: number; liked: boolean; }) => song.songId === songId && song.liked);
    setIsLiked(!!likedSong);
  }, [userSongs, songId]);
 
  
  console.log(userSongs);
  
  

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min.toString(),
        sec: secRemain.toString()
      });
    }
  }, [duration, isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        const seekSeconds = sound.seek([]) as number;
        setSeconds(seekSeconds);
        const min = Math.floor(seekSeconds / 60);
        const sec = Math.floor(seekSeconds % 60);
        setCurrTime({
          min: min.toString(),
          sec: sec.toString()
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  const handleLike = async () => {
    try {
      await axios.post('/api/is-liked', { userId, songId });
      setIsLiked(!isLiked); // Toggle the isLiked state immediately after the API call
      toast.success(isLiked ? 'Song unliked' : 'Song liked');
    } catch (error) {
      toast.error('Failed to update like status');
    }
  };


  const handleDelete = async () => {
    try {
      await axios.delete('/api/is-liked', { data:{userId, songId} });
      toast.success("Deleted successfully");
      location.reload()
    } catch (error) {
      toast.error('Failed to update like status');
    }
  };

  

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <img className="w-40 h-40 object-cover" src={img || '/sc.png'} alt="" />
      <div>
        <h3 className="text-neutral-100 text-lg">{artist}</h3>
        <p className="text-neutral-300">{title}</p>
      </div>


      <div className="flex items-center w-full justify-center gap-2">
        <div className="flex items-center ">
          <button className="playButton" onClick={onPreviousSong}>
            <IconContext.Provider value={{ size: "2em", color: "#27AE60" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "2em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="playButton" onClick={playingButton}>
              <IconContext.Provider value={{ size: "2em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button className="playButton" onClick={onNextSong}>
            <IconContext.Provider value={{ size: "2em", color: "#27AE60" }}>
              <BiSkipNext/>
            </IconContext.Provider>
          </button>
        </div>

        <input
          type="range"
          min="0"
          max={duration / 1000}
          defaultValue="0"
          value={seconds}
          className="w-8/12"
          onChange={(e) => {
            sound.seek([Number(e.target.value)]);
          }}
        />


        <div className="flex w-[100px]">
          <p>
            {currTime.min}:{currTime.sec}
          </p>
          /
          <p className=" text-neutral-400">
            {time.min}:{time.sec}
          </p>
        </div>

        <div onClick={handleLike}> 
          <FaHeart size={24} className={`${isLiked?'text-red-400':''} hover:text-green-400 hover:cursor-pointer`}/>
        </div>

        {
          user && 

          <div onClick={handleDelete}> 
            <MdOutlineDelete  size={24} className="hover:text-red-400 hover:cursor-pointer"/>
          </div>
        }

      </div>

      
    </div>
  );
}


export default Player



