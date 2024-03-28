
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function POST(
  req: Request,
) {
    const { userId, songId } = await req.json() 
    try {
        // Find an existing record in the userSongs table
        const found = await prisma.userSong.findFirst({
          where: { userId, songId },
        });
        console.log(found)
    
        if (found) {
          //If a record exists, delete it (unlike the song)
            await prisma.userSong.delete({
                where: { userSongId: found.userSongId }, 
            });
        } else {
          // if no record exists, create a new one (like the song)
          await prisma.userSong.create({
            data: { userId, songId, liked: true },
          });
        }
      return NextResponse.json({ message: 'Like status updated' });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
) {
  try{
    const { userId, songId } = await req.json() 
    console.log(userId,songId);
    // Remove records from the userSongs table
    await prisma.userSong.deleteMany({
      where: {
        songId: parseInt(songId),
        userId: parseInt(userId),
      },
    });

    // Delete the song itself from the songs table
    await prisma.song.delete({
      where: {
        songId: parseInt(songId),
      },
    });

    return  NextResponse.json({ success: true });
   
      
  }catch (error) {
    return  NextResponse.json("Internal Error", { status: 500 });
  }
}