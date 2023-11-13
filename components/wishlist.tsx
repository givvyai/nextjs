// Import necessary components and icons
import Image from 'next/image';
import { GiftIcon } from 'lucide-react'; 
import { wishlistItems } from '@/constants';

// Assuming you have a list of items for the wishlist (wishListItems) defined somewhere in your component

const WishlistBoard = () => {
  return (
    <div className="mt-10 px-4 md:px-20 lg:px-32 space-y-4">
    <h3 className="text-center text-lg font-semibold">Wishlist</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 rounded-lg border-dotted border-black-600 border-4">
      {wishlistItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 border-b hover:shadow-md transition cursor-pointer"
        >
          {/* Left: Image */}
          <div className="flex-shrink-0 mr-4">
            <Image
              src={item.imageSrc} // Replace with the actual image source
              alt={item.name}
              width={40}
              height={40}
              className="rounded-md object-cover object-center"
            />
          </div>

          {/* Middle: Item Name */}
          <div className="flex-grow text-sm font-medium">{item.name}</div>

          {/* Right: Gift Button */}
          <button className="flex items-center space-x-2 text-pink-500 hover:text-pink-700 bg-pink-300 rounded-md p-2">
            <p>Gift</p>
            <GiftIcon className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default WishlistBoard;
