import { Button } from "@/components/ui/button";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/constants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share } from "lucide-react"; // Assuming you have an icon for sharing
import { Separator } from "@/components/ui/separator";

type ProfileLabel = string;

interface ShareProfileDialogProps {
  label: ProfileLabel;
  color: string;
  icon: React.ComponentType<any>; // Adjust the type as per your icon type
}

export function ShareProfileDialog({
  label,
  color,
  icon: Icon,
}: ShareProfileDialogProps) {
  // Add your logic for sharing the profile here
  const handleShareProfile = () => {
    // Implement your sharing logic
    console.log("Profile shared!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge
          onClick={handleShareProfile}
          className={`w-50 sm:w-72 mx-auto ${color} text-center text-lg font-bold py-2 rounded-full hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1 flex items-center justify-center`}
        >
          {/* Use the dynamically assigned icon */}
          <span className="mr-2">
            <Icon className="w-5 h-5" />
          </span>
          {label}
        </Badge>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Profile </DialogTitle>
          <DialogDescription>
            Share your profile with friends.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <DialogFooter className="flex flex-col items-center">
          <div className="mb-4 flex flex-col items-center">
            <WhatsappShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
              separator=":: "
            >
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
            <span className="mt-2">Share to Whatsapp</span>
          </div>

          <div className="mb-4 flex flex-col items-center">
            <TwitterShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TwitterIcon size={45} round />
            </TwitterShareButton>
            <span className="mt-2">Share to Twitter</span>
          </div>
          <div className="mb-4 flex flex-col items-center">
            <TelegramShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
            >
              <TelegramIcon size={45} round />
            </TelegramShareButton>
            <span className="mt-2">Share to Telegram</span>
          </div>
          <div className="flex flex-col items-center">
            <FacebookShareButton
              url={"https://github.com/next-share"}
              quote={
                "next-share is a social share buttons for your next React apps."
              }
              hashtag={"#nextshare"}
            >
              <FacebookIcon size={45} round />
            </FacebookShareButton>
            <span className="mt-2">Share to Facebook</span>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
