"use client";

import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { home, reviews } from "@/constants";

import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="h-200 space-y-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Space for something animated
        </h2>
       
      </div>
      {/* Buttons for search and featured list */}
      <div className="mt-10 px-4 md:px-20 lg:px-32 space-y-4">
        <div className="flex flex-col gap-10">
          {home.map(({ href, color, icon: Icon, label }, index) => {
            return (
              <a href={href} key={href}>
                <div
                  className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl bg-pink-300 font-bold py-4 rounded-full hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 flex items-center justify-center`}
                >
                  {/* Use the dynamically assigned icon */}
                  <span className="mr-2">
                    <Icon className="w-8 h-8" />
                  </span>
                  {label}
                </div>
              </a>
            );
          })}
        </div>
      </div>
      {/* Review section */}
      <div className="mt-10 px-4 md:px-20 lg:px-32 space-y-4">
        <h2 className="text-center text-2xl font-semibold">
          Join your friends and family on givy
        </h2>
        <div className="m-6 mx-auto mb-8 grid max-w-5xl grid-cols-3 gap-x-4 gap-y-10 sm:grid-cols-4 lg:col-span-3 lg:gap-x-8">
          {reviews.map((review, index) => (
            <div key={index} className="group text-sm">
              <div className="">
                <Image
                  src={review.avatar}
                  alt={`Avatar ${index + 1}`}
                  width={20}
                  height={20}
                  className="mx-auto rounded-full object-cover object-center h-20 w-20"
                />
              </div>

              {/* <h3 className="mt-1 text-center font-medium">{review.name}</h3> */}
              <p className="mx-3 mt-2 text-center text-sm ">
                {review.comment} {/* Change to your description */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
