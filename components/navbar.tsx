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
