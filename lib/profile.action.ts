"use server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getSession } from "./auth.action";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const getUserProfile = async (userId?: string) => {
  if (!userId) {
    const session = await getSession();
    userId = session?.user?.id;
  }
  const profile = await prisma.profile.findUnique({
    where: {
      id: userId,
    },
  });
  return profile;
};

export const updateUserProfile = async (form: FormData) => {
  const session = await getSession();
  const data = Object.fromEntries(form);

  console.log({ data });

  try {
    // check if profile exists
    const userP = await getUserProfile(session?.user?.id!);
    const profile = await prisma.profile.upsert({
      where: {
        id: session?.user?.id,
      },
      update: {
        firstName: (data.firstName as string) || userP?.firstName,
        lastName: (data.lastName as string) || userP?.lastName,

        gender: (data.gender as string) || userP?.gender,
        username: (data.username as string) || userP?.username,
      },
      create: {
        firstName: data.firstName as string,
        lastName: data.lastName as string,

        gender: data.gender as string,
        username: data.username as string,
        user: {
          connect: {
            id: session?.user?.id,
          },
        },
      },
    });
    return profile;
  } catch (err) {
    console.log({ err });
  } finally {
    revalidatePath("/profile/edit");
  }
};

export const createUserProfile = async (userId: string, data: any) => {
  const profile = await prisma.profile.create({
    data: {
      id: userId,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return profile;
};

export const updateProfileImage = async (image: string, username?: string) => {
  const userProfile = await getUserProfile();
  const id = userProfile?.id;

  try {
    const profile = await prisma.profile.update({
      where: {
        id,
      },
      data: {
        image,
        username: userProfile?.username || username,
      },
    });
    return profile;
  } catch (err) {
    console.log({ err });
  } finally {
    revalidatePath("/profile/edit");
  }
};

export const getPulicUserProfile = async (username: string) => {
  const profile = await prisma.profile.findFirst({
    where: {
      username,
    },
  });
  return profile;
};
