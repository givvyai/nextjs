
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GiftIcon } from "lucide-react";

interface GiftDialogProps {
  itemName: string;
}

const GiftDialog: React.FC<GiftDialogProps> = ({ itemName }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGiftButtonClick = () => {
    // Add any logic you need before opening the dialog
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center space-x-2 rounded-md p-2"
            onClick={handleGiftButtonClick}
          >
            <p>Gift</p>
            <GiftIcon className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{`Gift Details for ${itemName}`}</DialogTitle>
          </DialogHeader>
          {/* Add your content for the gift details here */}
         
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GiftDialog;
