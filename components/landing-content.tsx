"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Step 1",
    avatar: "J",
    title: "Create your profile",
    description: "Set up your Givvy profile. Provide your preferences and create a wishlist of items you'd love to receive.",
  },
  {
    name: "Step 2",
    avatar: "A",
    title: "Share Your link",
    description: "Share your Givy link with your contacts and let them gift you either anonymously or opt to reveal their identity",
  },
  {
    name: "Step 3",
    avatar: "M",
    title: "Discover and gift contacts",
    description: "Discover contacts on Givy and gift them their wishlist or let AI suggest an ideal gift based on their preference",
  },
  {
    name: "Step 4",
    avatar: "M",
    title: "Receive the perfect gift",
    description: "Receive surprises and surprises from friends and family thats tailored to match your preferences or wishlist",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-3xl text-white font-extrabold mb-10">How to use Givy ?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}