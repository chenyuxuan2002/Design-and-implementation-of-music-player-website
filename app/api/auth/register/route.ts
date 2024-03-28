import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import prisma from "@/prisma";

export async function POST(
  req: Request,
  res: Response
) {
  try {
    const { email, password, username } = await req.json();
    console.log(email, password, username);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || !username || !emailRegex.test(email)) {
      return new NextResponse("Invalid input or all fields are required", { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email }
    });

    if (existingUser) {
      return new NextResponse("Internal Error", { status: 500 });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
