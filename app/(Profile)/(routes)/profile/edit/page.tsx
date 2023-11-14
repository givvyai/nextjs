import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSession } from "@/lib/auth.action";
import { getUserProfile, updateUserProfile } from "@/lib/profile.action";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UploadImage from "./uploadImage";
import { SubmitButton } from "@/components/ui/submitting-button";

const UserProfile = async () => {
  const session = await getSession();
  const profile = await getUserProfile(session?.user.id!);
  return (
    <div className="w-screen flex  gap-10 p-4">
      <form
        className="border p-4 rounded-lg flex flex-col gap-4"
        action={updateUserProfile}
      >
        <p>Edit Profile </p>
        <UploadImage image={profile?.image} />
        <Input name="firstName" type="text" placeholder="John" />
        <Input name="lastName" type="text" placeholder="Doe" />
        <Input name="username" type="text" placeholder="johnny" />
        <Select name="gender">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Gender</SelectLabel>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <SubmitButton />
      </form>

      <div className="border rounded-lg  p-4">
        <div>
          <h1 className="text-2xl font-semibold">Profile</h1>
          {Object.entries(profile!)
            .filter(([key, value]) => !["id", "userId", "image"].includes(key))
            .map(([key, value]) => (
              <div key={key} className="flex justify-between gap-10">
                <i className="">{key}</i>
                <span>{value}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
