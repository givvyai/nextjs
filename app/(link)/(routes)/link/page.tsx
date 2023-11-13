"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import WishlistBoard from "@/components/wishlist";
import GiftSuggestion from "@/components/ai-suggest";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            alt="user image"
            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            className="mx-auto rounded-full object-cover object-center h-20 w-20"
            width={30}
            height={30}
          />
        </div>

        <div className="text-center p-3">
          <h1 className="text-1xl font-semibold">Ijiga Blessing</h1>
          
        </div>
      </div>

      {/* Wishlist */}
      <WishlistBoard/>
      <GiftSuggestion/>
    </div>
  );
}
