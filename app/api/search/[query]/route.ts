
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function GET(
    req:Request,
) {
    try{
      const url = req.url
      const searchString = "search/";

      if (url.includes(searchString)) {
        const query = url.split(searchString)[1];

        if (!query) {
          return NextResponse.json({ error: 'Query parameter is required' });
        }
        console.log(query);
        
       // Search for songs by title or artist
        const songs = await prisma.song.findMany({
          where:{
            OR:[
              {
                title:{
                  contains: query,
                },
              },
              {
                artist:{
                  contains: query,
                }
              }
            ]
          }
        });
        
        return NextResponse.json(songs);
      }
     
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}