
import { NextResponse } from "next/server";
import prisma from "@/prisma";

interface UserSong {
    userSongId: number;
    userId: number;
    songId: number;
    liked: boolean;
  }
  
  interface Song {
    songId: number;
    title: string;
    artist: string;
    mp3Path: string;
    duration: number;
    // Add other fields as necessary
  }
  

export async function GET(
  req: Request,
) {
  try{
    const url = req.url
    const searchString = "liked-songs/";
    
    if (url.includes(searchString)) {
      const userId = url.split(searchString)[1];
      console.log(userId);
      
      if (!userId) {
        return NextResponse.json({ error: 'userId is required' });
      }else{
        const likedSongs: any = await prisma.userSong.findMany({
          where: {
            userId: parseInt(userId),
            liked: true,
          },
          select: {
            songId: true, // Only fetch the songId
          },
        });
    
        // Extract songIds
        const songIds = likedSongs.map((item:any) => item.songId);
    
        // Fetch full song details
        const songs: any = await prisma.song.findMany({
          where: {
            songId: { in: songIds },
          },
        })

        return NextResponse.json(songs);

      }
      
  }
  
       
  } catch (error) {
    return  NextResponse.json("Internal Error", { status: 500 });
  }
}




