import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GiftSuggestion = () => {
  const [loadingText, setLoadingText] = useState("");
  const [suggestion, setSuggestion] = useState(
    "AI suggests a wonderful gift for your loved one!"
  );
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleSuggest = () => {
    setSuggestion("AI suggests a wonderful gift for your loved one!");
  
    // Show the first loading text
    setLoadingText("Accessing Claudia's preferences...");
  
    // After 2 seconds, update to the second loading text
    setTimeout(() => {
      setLoadingText("Thinking of the best gift for Claudia...");
    }, 2000);
  
    // After another 2 seconds, open the dialog
    setTimeout(() => {
      setDialogOpen(true);
  
      // Clear the loading text
      setLoadingText("");
    }, 4000);
  };
  

  const handleCloseDialog = () => {
    // Replace this with your logic for the next suggestion
    setDialogOpen(false); // Close the dialog after handling the next suggestion
  };

  const handleNextSuggestion = () => {

  }

  return (
    <div className="mt-10 px-4 md:px-20 lg:px-32 flex flex-col items-center space-y-4">
      <h3 className="text-center text-lg font-semibold">Gift Suggestion</h3>
      <p className="text-center mb-4">
        Allow AI to suggest the ideal gift for your loved one:
      </p>

      {/* Show the suggestion after loading texts have finished */}
      {suggestion && (
        <div className="mt-4 text-center">
          <p className="text-green-600 font-semibold">{loadingText}</p>
        </div>
      )}

      {/* The Dialog component with the suggested content */}
      <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Gift Suggestion</DialogTitle>
            <DialogDescription>{suggestion}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleNextSuggestion}>Next suggestion</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Using the Button to manually control the dialog */}
      <Button variant="outline" onClick={handleSuggest}>
        Suggest
      </Button>
    </div>
  );
};

export default GiftSuggestion;
