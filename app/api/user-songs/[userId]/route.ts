
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function GET(
  req: Request,
) {
  try{
    const url = req.url
    const searchString = "user-songs/";
    console.log("cool");
    
    
    if (url.includes(searchString)) {
      const userId = url.split(searchString)[1];
      console.log(userId);
      
      if (!userId) {
        return NextResponse.json({ error: 'userId is required' });
      }
      const userSongs = await prisma.userSong.findMany({
        where: { userId:parseInt(userId),liked:true },
      });

      
      console.log(userSongs);
      
      return NextResponse.json(userSongs);
  }
  
       
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
