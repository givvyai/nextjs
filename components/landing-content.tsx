"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const testimonials = [
  {
    name: "Step 1",
    avatar: "J",
    title: "Create your profile",
<<<<<<< HEAD
    description:
      "Set up your Givvy profile. Provide your preferences and create a wishlist of items you'd love to receive.",
    link: "/profile",
    btnTxt: "Create  profile",
=======
    description: "Set up your Givv profile. Provide your preferences and create a wishlist of items you'd love to receive.",
>>>>>>> 3405e0b (lotss..)
  },
  {
    name: "Step 2",
    avatar: "A",
    title: "Share Your link",
<<<<<<< HEAD
    description:
      "Share your Givy link with your contacts and let them gift you either anonymously or opt to reveal their identity",
    link: "/share",
    btnTxt: "Share link",
=======
    description: "Share your Givv link with your contacts and let them gift you either anonymously or opt to reveal their identity",
>>>>>>> 3405e0b (lotss..)
  },
  {
    name: "Step 3",
    avatar: "M",
    title: "Discover and gift contacts",
<<<<<<< HEAD
    description:
      "Discover contacts on Givy and gift them their wishlist or let AI suggest an ideal gift based on their preference",
    link: "/discover",
    btnTxt: "Discover",
=======
    description: "Discover contacts on Givv and gift them their wishlist or let AI suggest an ideal gift based on their preference",
>>>>>>> 3405e0b (lotss..)
  },
  {
    name: "Step 4",
    avatar: "M",
    title: "Receive the perfect gift",
    description:
      "Receive surprises and surprises from friends and family thats tailored to match your preferences or wishlist",
    link: "/receive",
    btnTxt: "Receive gift",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
<<<<<<< HEAD
      <h2 className="text-center text-3xl text-white font-extrabold mb-10">
        How to use Givy ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
=======
      <h2 className="text-center text-3xl text-[#D8E4FF] font-extrabold mb-10">How to use Givy ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-[#D8E4FF]">
>>>>>>> 3405e0b (lotss..)
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
            <CardFooter>
              <Link href={item.link}>
                <Button>{item.btnTxt}</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
