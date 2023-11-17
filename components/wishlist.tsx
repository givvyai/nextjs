import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import GiftDialog from "./gift-dialog";
import { wishlistItems } from "@/constants";

const WishlistBoard = () => {
  return (
    <div className="mt-10 px-4 md:px-20 lg:px-32 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Wishlist</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-lg ">
          {wishlistItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border-b hover:shadow-md transition cursor-pointer"
            >
              <Label htmlFor="necessary" className="flex flex-col space-y-1">
                <span>{item.name}</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  @yaay and 5 others viewed.
                </span>
              </Label>
              {/* Right: Gift Button */}
              <GiftDialog itemName={item.name} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default WishlistBoard;






