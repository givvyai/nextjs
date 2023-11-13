import Image from "next/image";

import { profile } from "@/constants";
import { getUserProfile } from "@/lib/profile.action";
import { CopyLink } from "@/components/copu-link";

export default async function HomePage() {
  const userProfile = await getUserProfile();

  const linkValue = `${process.env.NEXTAUTH_URL}/${userProfile?.username}`; // Replace this with your actual link value

  return (
    <div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="aspect-w-1 aspect-h-1">
          <Image
            alt="user image"
            src={
              userProfile?.image ||
              "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            }
            className="mx-auto rounded-full object-cover object-center h-20 w-20"
            width={48}
            height={48}
          />
        </div>

        <div className="text-center p-3">
          <h1 className="text-2xl font-semibold">@{userProfile?.username}</h1>
          <p className="text-sm mt-3 flex items-center">
            <span>{linkValue}</span>

            <CopyLink link={linkValue} />
          </p>
        </div>
      </div>

      {/* Buttons for search and featured list */}
      <div className="mt-10 px-4 md:px-20 lg:px-32 space-y-4">
        <div className="flex flex-col gap-10">
          {profile.map(({ href, color, icon: Icon, label }, index) => {
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
    </div>
  );
}
