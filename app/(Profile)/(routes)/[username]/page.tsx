import { getPulicUserProfile } from "@/lib/profile.action";

const UserPublicProfile = async ({ params }: { params: any }) => {
  const profile = await getPulicUserProfile(params.username);
  return (
    <div className="border rounded-lg w-[600px]  p-4">
      <h1 className="text-2xl font-semibold">
        Public Profile of @{params.username}
      </h1>
      {Object.entries(profile!)
        .filter(([key, _]) => !["id", "userId", "image"].includes(key))
        .map(([key, value]) => (
          <div key={key} className="flex justify-between gap-10">
            <i className="">{key}</i>
            <span>{value}</span>
          </div>
        ))}
    </div>
  );
};

export default UserPublicProfile;
