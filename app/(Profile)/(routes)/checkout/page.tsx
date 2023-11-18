"use client";
import Flutterwave from "@/components/payments/FlutterWave";
import { Button } from "@/components/ui/button";
import { PartyPopperIcon } from "lucide-react";
import { PaystackButton } from "react-paystack";
const Checkout = () => {
  const pstkProps = {
    email: "",
    amount: 0,
    metadata: {
      name: "",
      phone: "",
      custom_fields: [],
    },
    publicKey: "",
    text: "Pay With PayStack",
    onSuccess: () => saveToBackend(),
    onClose: () => {},
  };
  const saveToBackend = () => {};

  return (
    <div className="flex w-full justify-center gap-10">
      <Button className="flex gap-2">
        <PaystackButton {...pstkProps} />
        <PartyPopperIcon />
      </Button>

      <Flutterwave />
    </div>
  );
};

export default Checkout;
