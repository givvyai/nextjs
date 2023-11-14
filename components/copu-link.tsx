"use client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CopyIcon } from "lucide-react";
export const CopyLink = ({ link }: { link: string }) => {
  return (
    <CopyToClipboard text={link}>
      <span className="ml-2 cursor-pointer">
        <CopyIcon />
      </span>
    </CopyToClipboard>
  );
};
