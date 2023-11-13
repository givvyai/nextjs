"use server";

import { auth } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";

export const updateProfile = async (form: FormData) => {
  const { userId } = auth();
  try {
    await prisma?.profile.create({
      data: {
        gender: "",
        userId: userId || "",
      },
    });

    return "Profile created successfully";
  } catch (error) {
    return "Error: " + JSON.stringify(error);
  }
};
