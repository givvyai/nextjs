"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        signOut({
          callbackUrl: "/sign-in",
        })
      }
    >
      <LogOutIcon />
    </Button>
  );
}
