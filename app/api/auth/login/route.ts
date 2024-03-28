
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import prisma from "@/prisma";

export async function POST(
  req: Request,
) {
    
  try {
    const {email, password} = await req.json() 
    console.log(email,password);
    
    const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return NextResponse.json({ error: 'Internal Server Error' },{ status: 500 })
      }
      return NextResponse.json(user);

  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
};