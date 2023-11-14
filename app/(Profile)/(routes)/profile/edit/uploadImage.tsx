"use client";
import { Button } from "@/components/ui/button";
import { useCoverImage } from "@/hooks/use-cover-image";
import { ImageIcon } from "lucide-react";
import { UserAvatar } from "@/components/user-avatar";
import Image from "next/image";
const UploadImage = ({ image }: { image: string | null | undefined }) => {
  const coverImage = useCoverImage();
  return (
    <>
      {!image ? (
        <Button
          onClick={coverImage.onOpen}
          className="text-muted-foreground text-xs"
          variant="outline"
          size="sm"
        >
          <ImageIcon className="h-4 w-4 mr-2" />
          Add cover
        </Button>
      ) : (
        <div className="h-8 w-8 flex gap-3">
          <Image
            src={image}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Button
            onClick={() => coverImage.onReplace(image)}
            className="text-muted-foreground flex  text-xs"
            variant="outline"
          >
            <ImageIcon className=" mr-2" />
            Change Image
          </Button>
          {/* <AvatarFallback>{name}</AvatarFallback> */}
        </div>
      )}
    </>
  );
};

export default UploadImage;
