
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function GET() {
    try{
      //Fetch unique genres from the songs table
        const uniqueGenres = await prisma.song.findMany({
            select: {
              genre: true
            },
            distinct: ['genre']
          });

          //Fetch songs for each genre
          const categoriesWithSongs = await Promise.all(uniqueGenres.map(async (genreObj:any) => {
            const genre = genreObj.genre;
            const songs = await prisma.song.findMany({
              where: { genre },
              select: {
                songId: true,
                title: true,
                artist: true,
                releaseDate: true,
                duration: true,
                mp3Path: true,
                albumUrl: true
              }
            });
            return { genre, songs };
          }));
    
          return Response.json(categoriesWithSongs);
    }catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}

