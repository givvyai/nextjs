"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WishlistBoard from "@/components/wishlist";
import GiftSuggestion from "@/components/ai-suggest";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="aspect-w-1 aspect-h-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <p className="text-md mt-1 flex items-center">Boyo bidemi</p>
      </div>

      {/* Wishlist */}
      <WishlistBoard />
      <GiftSuggestion />
    </div>
  );
}
