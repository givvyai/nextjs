import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    console.log({ body });
    const profile = await prisma.profile.create({
      data: {
        ...body,
        userId,
      },
    });
    return NextResponse.json(profile);
  } catch (error) {
    console.error({ error });
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    const profile = await prisma.profile.findFirst({
      where: {
        userId: userId!,
      },
    });
    return NextResponse.json(profile);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
