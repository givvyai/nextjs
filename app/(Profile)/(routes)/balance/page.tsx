import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Transactions } from "./transactions";

export default function BalancePage() {
  return (
    <>
      {/* Balance */}
      <h3 className="my-4 text-lg font-semibold">Balance</h3>
      <div className="grid gap-4 ">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Received
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              Total gift recieved from friends and family
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-row items-center justify-between space-y-0">
          <CardHeader className="flex-1">
            <CardTitle className="text-sm font-medium">
              Total Available
            </CardTitle>
            <div className="text-2xl font-bold">$5,231.89</div>
            <p className="text-xs text-muted-foreground">
              Available balance
            </p>
          </CardHeader>
          <CardFooter>
            <Button className="mt-3 rounded-lg items-center" variant="outline">
              Withdraw
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Transactions section */}
      <Card className="mt-5 col-span-3">
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
          <CardDescription>
            You have 18 transactions for this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Transactions />
        </CardContent>
      </Card>

      {/* withdraw button */}
    </>
  );
}
