"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="ml-2 flex items-center">
        <h1 className={cn("text-2xl font-bold text-[#D8E4FF]", font.className)}>
          Givv
        </h1>
      </Link>
<<<<<<< HEAD
      <div className="flex items-center gap-x-2">
        <Link
          href={"/sign-up"}
=======
      <div className="mr-2 flex items-center gap-x-2">
        <Link
          href={isSignedIn ? "/home" : "/sign-up"}
>>>>>>> 3405e0b (lotss..)
          // href="https://docs.google.com/forms/d/e/1FAIpQLScAdCnBwVaToxA49ieVWVmUcueokiy1e3ljvhsd651VfrpKUg/viewform?usp=pp_url"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="rounded-full"
            style={{ color: "#D8E4FF", borderColor: "#D8E4FF" }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
