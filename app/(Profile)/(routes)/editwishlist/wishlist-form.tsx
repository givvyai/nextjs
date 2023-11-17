"use client";
import { Card, CardContent } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const wishlist = [
  {
    wishitem: "iphone15",
    viewed: "43",
    totalAmount: "$250.00",
    paymentMethod: "45,000",
  },
  {
    wishitem: "iphone25",
    viewed: "10",
    totalAmount: "$150.00",
    paymentMethod: "18,000",
  },
  {
    wishitem: "iphone35",
    viewed: "3",
    totalAmount: "$350.00",
    paymentMethod: "345,000",
  },
  {
    wishitem: "iphone35",
    viewed: "13",
    totalAmount: "$350.00",
    paymentMethod: "345,000",
  },
];

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.number().min(3, {
    message: "enter valid a number .",
  }),
});

export function WishlistForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      price: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="my-4 text-lg font-semibold">Wishlist</h3>
        <Button
          className="rounded-lg"
          variant="outline"
          style={{ color: "#804E49", borderColor: "#804E49" }}
        >
          Go to balance
        </Button>
      </div>

      {/* table section */}
      <div className=" mt-3 flex flex-col items-center justify-center">
        <h3 className="mt-2 my-4 text-lg font-semibold">My items</h3>
        <Card style={{ background: "transparent" }}>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="w-[100px]">Price</TableHead>
                  <TableHead className="text-right">Viewed</TableHead>
                  <TableHead className="text-right">Received</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wishlist.map((wishitem) => (
                  <TableRow key={wishitem.wishitem}>
                    <TableCell className="font-medium">
                      {wishitem.wishitem}
                    </TableCell>
                    <TableCell>{wishitem.paymentMethod}</TableCell>
                    <TableCell className="text-right">
                      {wishitem.viewed}
                    </TableCell>
                    <TableCell className="text-right">
                      {wishitem.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>

        {/* Add new item */}
        <h3 className="mt-10 my-4 text-lg font-semibold">Add new item</h3>
        <Card style={{ background: "transparent" }}>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-6 space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="iphone 15.." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Price.." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                  }}
                  type="submit"
                >
                  Add item
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
