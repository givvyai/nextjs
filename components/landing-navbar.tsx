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
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          {/* <Image fill alt="Logo" src="/logo.png" /> */}
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Givy
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        {/* {isSignedIn ? "/dashboard" : "/sign-up"} */}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScAdCnBwVaToxA49ieVWVmUcueokiy1e3ljvhsd651VfrpKUg/viewform?usp=pp_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
