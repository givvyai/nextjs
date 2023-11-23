"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Badge } from "@/components/ui/badge";
import { CopyIcon } from "lucide-react";
import { profile } from "@/constants";
import { ShareProfileDialog } from "./shareprofile";
import { useEffect } from "react";

export default function HomePage() {
  const { toast } = useToast();
  const router = useRouter();

  const linkValue = "https://givy/Akeemtobi"; // Replace this with your actual link value

  const handleCopy = () => {
    // Handle the copy logic here
    console.log("Link copied to clipboard!");
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/profile");
  //     const json = await res.json();
  //     console.log({ json });
  //     if (json === null) {
  //       // create profile

  //       const postres = await fetch("/api/profile", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           firstName: "String",
  //           gender: "String",
  //           image: "String",
  //           lastName: "String",
  //           username: "String",
  //         }),
  //       });
  //       const postjson = await postres.json();
  //       console.log({ postjson });
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="aspect-w-1 aspect-h-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className="text-center p-3">
          <h1 className="text-xl font-semibold">@flyingscroll</h1>
          <p className="text-sm mt-3 flex items-center">
            <span>{linkValue}</span>
            <CopyToClipboard text={linkValue} onCopy={handleCopy}>
              <span className="ml-2 cursor-pointer">
                <CopyIcon
                  className="w-3 h-3"
                  onClick={() => {
                    toast({
                      title: "Copied",
                      description: "Link copied to clipboard",
                    });
                  }}
                />
              </span>
            </CopyToClipboard>
          </p>
        </div>
      </div>

      {/* Buttons for search and featured list */}
      <div className="mt-10 px-4 md:px-20 lg:px-32 space-y-4">
        <div className="flex flex-col gap-10">
          {profile.map(({ href, color, icon: Icon, label }, index) => {
            return (
              <div key={index}>
                {label === "Share profile" ? (
                  <ShareProfileDialog
                    key={href}
                    label={label}
                    color={color}
                    icon={Icon}
                  />
                ) : (
                  <a href={href} key={href}>
                    <Badge
                      className={`w-50 sm:w-72 mx-auto ${color} text-center text-lg font-bold py-2 rounded-full hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 flex items-center justify-center`}
                    >
                      {/* Use the dynamically assigned icon */}
                      <span className="mr-2">
                        <Icon className="w-5 h-5" />
                      </span>
                      {label}
                    </Badge>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
