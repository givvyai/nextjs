import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { Button } from "../ui/button";

export default function Flutterwave() {
  const config = {
    public_key: "FLWPUBK-**************************-X",
    tx_ref: Date.now().toLocaleString(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <Button variant="premium">
      <FlutterWaveButton {...fwConfig} />
    </Button>
  );
}
