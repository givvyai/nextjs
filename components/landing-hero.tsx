"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-32 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-6 font-extrabold">
        <h1>Find the perfect gift for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Ene.",
                "Oluwatosin.",
                "Casandra.",
                "James.",
                "Ngozi.",
                "Zainab.",
                "Chijioke.",
                "Amina.",
                "Obinna.",
                "Ade.",
                "Fatima.",
                "Chuka.",
                "Nia.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-sm md:text-lg max-w-prose font-light text-zinc-300">
          Givvy is an AI gifting tool that suggests the perfect gift for your
          friends and loved ones based on their preferences. Create your
          profile, curate your wishlist and preference and Share it to your
          contacts to let them gift you easily.
        </div>
      </div>
      
      <div>
        <Link href={isSignedIn ? "/home" : "/sign-up"}
          // href="https://docs.google.com/forms/d/e/1FAIpQLScAdCnBwVaToxA49ieVWVmUcueokiy1e3ljvhsd651VfrpKUg/viewform?usp=pp_url"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Get started
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Join our waitlist
      </div>
    </div>
  );
};
