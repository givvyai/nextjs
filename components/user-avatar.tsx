import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
export const UserAvatar = async ({
  image,
  name,
}: {
  image: string;
  name?: string;
}) => {
  console.log("image in avatar", image);
  return (
    <div className="h-8 w-8">
      <Image
        src={image}
        alt="avatar"
        width={100}
        height={100}
        className="rounded-full"
      />
      {/* <AvatarFallback>{name}</AvatarFallback> */}
    </div>
  );
};
