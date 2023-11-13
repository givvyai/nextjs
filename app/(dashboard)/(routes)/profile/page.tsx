import { ProfileForm } from "@/components/ProfileForm";
import { Heading } from "@/components/heading";

import { User2Icon } from "lucide-react";

const ProfilePage = () => {
  return (
    <div>
      <Heading
        title="Profile"
        description="Your personal information"
        icon={User2Icon}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />

      <ProfileForm />
    </div>
  );
};
export default ProfilePage;
