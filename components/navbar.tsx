<<<<<<< HEAD
import { getUserProfile } from "@/lib/profile.action";
import Image from "next/image";
import Logout from "./Logout";
import Link from "next/link";

const Navbar = async () => {
  const profile = await getUserProfile();

  return (
    <div className="flex items-center p-4">
      <p className="text-2xl font-bold">Givy</p>
      <div className="flex w-full items-center gap-3 justify-end">
        <Link href={"/profile"}>
          <Image
            src={profile?.image || "/images/avatar.png"}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
=======
import { UserButton } from "@clerk/nextjs";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import React from "react";
import Link from "next/link";
import Image from 'next/image'
import menu from '../public/menu.svg'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator"

const Header = () => {
  return (
    <>
    <div className="flex items-center p-4">
      <Link href='/home' className="text-2xl font-bold">Givv</Link>
      <div className="flex w-full justify-end">
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Image
              src={menu}
              alt="menu"
              width={28}
              height={28}
              className="inline-block cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent style={{ background: '#FFF7F0' }} className="w-48">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {/* Use the Link component from next/link to create links */}
            <Link href="/profile" passHref>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link href="/notifications" passHref>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
            </Link>
            <Link href="/balance" passHref>
              <DropdownMenuItem>Balance</DropdownMenuItem>
            </Link>
            <Link href="/link" passHref>
              <DropdownMenuItem>Preview Link</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
    <Separator />
    </>
  );
};

export default Header;
>>>>>>> 3405e0b (lotss..)
