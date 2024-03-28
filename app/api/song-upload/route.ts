
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'
import prisma from "@/prisma";


export const config = {
    api: {
      bodyParser: false, // We disable the default bodyParser to use formidable
    },
};



export async function POST(
    req: Request,
  ) {
    try {
        const data: any = await req.formData();
        const title = data.get('title');
        const artist = data.get('artist') || null; // Default to null if empty
        const genre = data.get('genre') || null;
        const duration = parseInt(data.get('duration'), 10) || 0;
        const albumUrl = data.get('albumUrl') || null;
        const file: File | null = data.get('file') as unknown as File;
        
        if (!file) {
            return NextResponse.json({ success: false })
        }
        
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
    
        const path = `public/song-files/${file.name}`
        const sqlPath = `/song-files/${file.name}`

        try{
            await writeFile(path, buffer)
            await prisma.song.create({
                data:{title,artist, genre, duration,albumUrl,mp3Path:sqlPath
                }
            })
            return NextResponse.json({sccuess:true})
        }catch(e:any){
            console.log(e.message);
            return NextResponse.json({sccuess:false}) 
        }
        

    }catch (error) {
      return new Response("Internal Error", { status: 500 });
    }
}
  
  