"use server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { getSession } from "./auth.action";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export const getUserProfile = async (userId: string) => {
  const profile = await prisma.profile.findUnique({
    where: {
      id: userId,
    },
  });
  return profile;
};

export const updateUserProfile = async (form: FormData) => {
  const session = await getSession();
  const data: Prisma.ProfileUpdateInput = Object.fromEntries(form);
  try {
    const profile = await prisma.profile.update({
      where: {
        id: session?.user?.id,
      },
      data: { ...data, age: Number(data.age) },
    });
    return profile;
  } catch (err) {
  } finally {
    revalidatePath("/dasboard");
    redirect("/dashboard");
  }
};

export const createUserProfile = async (
  userId: string,
  data: Prisma.ProfileCreateInput
) => {
  const profile = await prisma.profile.create({
    data: {
      id: userId,
      ...data,
    },
  });
  return profile;
};
