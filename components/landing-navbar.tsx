"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="ml-2 flex items-center">
        <h1 className={cn("text-2xl font-bold text-[#D8E4FF]", font.className)}>
          Givv
        </h1>
      </Link>
      <div className="mr-2 flex items-center gap-x-2">
        <Link
          href={isSignedIn ? "/home" : "/sign-up"}
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
