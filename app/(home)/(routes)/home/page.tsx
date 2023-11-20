"use client";

import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { home, reviews } from "@/constants";

import Image from "next/image";
import HomeContent from "./home-content";

export default function HomePage() {
  const router = useRouter();

  return (
    <main>
      <section className=" border-4 max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 ">
        <HomeContent/>
      </section>

      {/* Buttons for search and featured list */}
      <section className="border-4 mt-10 px-16 space-y-4">
        <div className="flex flex-col gap-10">
          {home.map(({ href, color, icon: Icon, label }, index) => {
            return (
              <a href={href} key={href}>
                <Badge
                  className={`w-62 mx-auto ${color} text-center text-lg font-bold py-2 rounded-full hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 flex items-center justify-center`}
                >
                  {/* Use the dynamically assigned icon */}
                  <span className="mr-2">
                    <Icon className="w-5 h-5" />
                  </span>
                  {label}
                </Badge>
              </a>
            );
          })}
        </div>
      </section>


      {/* Review section */}
      <section className="border-4 mt-10 px-4 md:px-20 lg:px-32 space-y-4">
        <h2 className="text-center text-1xl font-semibold">
          Join your friends and family on givy
        </h2>
        <div className="m-6 mx-auto mb-8 grid max-w-5xl grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex-col items-center text-sm">
              <div className="flex items-center justify-center">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>

              <p className="mx-3 mt-2 text-center text-xs">
                {review.comment} {/* Change to your description */}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
