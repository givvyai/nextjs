"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { updateProfile } from "@/lib/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import { useSession } from "@clerk/nextjs";
import Image from "next/image";
import { Avatar } from "./ui/avatar";

export const ProfileForm = () => {
  const { session } = useSession();

  return (
    <div className="flex justify-between px-8">
      <form className="rounded border " action={updateProfile}>
        <Input type="text" name="gender" />
        <Submit />
      </form>
      <section>
        <p>{session?.user?.fullName}</p>
        <Avatar>
          <Image
            src={session?.user.imageUrl || ""}
            alt="avatar"
            width={100}
            height={100}
          />
        </Avatar>
        <p></p>
      </section>
    </div>
  );
};
function Submit() {
  const { pending, data, method, action } = useFormStatus();
  return (
    <Button type="submit">
      {pending ? <Loader2 className="animate-spin" /> : "Submit"}
    </Button>
  );
}
