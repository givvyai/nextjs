import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { getQSParamFromURL } from "@/lib/qq-params";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    console.log({ body });
    const wishListItem = await prisma.wishListItem.create({
      data: {
        ...body,
        userId,
      },
    });
    return NextResponse.json(wishListItem);
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ error });
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    const page: number = parseInt(getQSParamFromURL("page", req.url)!) || 1;
    const limit: number = parseInt(getQSParamFromURL("limit", req.url)!) || 10;
    const startIndex: number = (page - 1) * limit;
    const wishList = await prisma.wishListItem.findMany({
      where: {
        userId: userId!,
      },
      skip: startIndex,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    const count = await prisma.wishListItem.count({
      where: {
        userId: userId!,
      },
    });
    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      count,
    };

    return NextResponse.json({ wishList, pagination });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
