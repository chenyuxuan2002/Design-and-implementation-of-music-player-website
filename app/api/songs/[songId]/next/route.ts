
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function GET(
    req:Request,
   { params }: { params: { slug: number } }
) {

    const url = req.url
    const startIndex = url.indexOf("songs/") + "songs/".length;  
    const endIndex = url.indexOf("/next");  
    const currentSongId = url.slice(startIndex, endIndex);  
    const currentSongIdNumber = parseInt(currentSongId, 10);

    try {
        const nextSong = await prisma.song.findFirst({
            where: {songId: { gt: currentSongIdNumber }},
            orderBy: {
                songId: 'asc'
            }
        });

    if (!nextSong) {
        return Response.json({ message: 'No next song found' });
    }

    console.log(nextSong);
    return Response.json(nextSong)
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};