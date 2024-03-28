
import { NextResponse } from "next/server";
import prisma from "@/prisma";




export async function POST(req: Request) {
    const { userId, songId } = await req.json();
    try {
        const found = await prisma.playlistItem.findFirst({
          where: { userId, songId },
        });
      
    
        if (!found) {
            await prisma.playlistItem.create({
              data: { userId, songId },
            });
            return NextResponse.json({ message: 'Added successfully' });
        } else {
            return NextResponse.json({ message: 'Item already exists in the playlist' });
        }
    } catch (error) {
        console.error(error); // It's a good practice to log the error for debugging.
        return new NextResponse("Internal Error", { status: 500 });
    }
}

export async function DELETE(
  req: Request
  ) {
  try {
    const { userId, songId } = await req.json();

    // Remove the song from the playlist
    await prisma.playlistItem.deleteMany({
      where: {
        songId: parseInt(songId),
        userId: parseInt(userId),
      },
    });

    return NextResponse.json({ message: "Song removed from playlist successfully" });


  } catch (error) {
    console.error(error);
    return NextResponse.json("Internal Error", { status: 500 });
  }
}
