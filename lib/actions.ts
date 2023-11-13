"use server";

import { auth } from "@clerk/nextjs";

export const updateProfile = async ( form: FormData) => {
  const { userId } = auth();
  try {
    await prisma?.profile.create({
      data: {
        gender: form.get("gender")?.toString() || "",
        userId: userId || "",
      },
    });

    return "Profile created successfully";
  } catch (error) {
    return "Error: " + JSON.stringify(error);
  }
};
