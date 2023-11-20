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

interface NotificationDialogProps {
  label: string;
  description: string;
  note: string;
}

const NotificationDialog: React.FC<NotificationDialogProps> = ({
  label,
  note,
  description,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => {
    // Add any logic you need before opening the dialog
    setIsDialogOpen(true);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={handleOpen}>
            View
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{label}</DialogTitle>
          </DialogHeader>
          <p>{description}</p>
          <p>Note: {note}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NotificationDialog;
