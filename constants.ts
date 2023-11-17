import {
  Search,
  Gift,
  GiftIcon,
  Edit,
  Share,
  Settings,
  Lock,
  Wand,
  
} from "lucide-react";


export const MAX_FREE_COUNTS = 5;

export const reviews = [
  {
    avatar:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    name: 'Amara',
    comment: "Amazing experience! Highly recommended.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    name: 'Amara',
    comment: "Amazing experience! Highly recommended.",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    name: 'Amara',
    comment: "Amazing experience! Highly recommended.",
  },
 
  // Add more review objects as needed
];

export const home = [
  {
    label: "Profile",
    icon: Gift,
    href: "/profile",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Discover friends",
    icon: Search,
    href: "/contacts",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Report a problem",
    icon: Search,
    href: "/contacts",
    color: "text-[#DD1155]",
    bgColor: "bg-violet-500/10",
  },
 
];

export const profile = [
  {
    label: "Personal details",
    icon: Edit,
    href: "/details",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Preference",
    icon: Edit,
    href: "/preference",
    color: "#FFEE88",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Wishlist",
    icon: Wand,
    href: "/editwishlist",
    color: "#FFF7F0",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Share profile",
    icon: Share,
    href: "/tadah",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Settings",
    icon: Settings,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/settings",
  },
  // {
  //   label: "Pro",
  //   icon: Lock,
  //   color: "text-orange-700",
  //   bgColor: "bg-orange-700/10",
  //   href: "/video",
  // },
];


export const wishlistItems = [
  {
    name: 'Item 1',
    imageSrc: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    icon: GiftIcon,
  },
  {
    name: 'Item 2',
    imageSrc: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    icon: GiftIcon,
  },
  {
    name: 'Item 3',
    imageSrc: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    icon: GiftIcon,
  },
  // {
  //   name: 'Item 4',
  //   imageSrc: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
  //   icon: GiftIcon,
  // },
  // {
  //   name: 'Item 5',
  //   imageSrc: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
  //   icon: GiftIcon,
  // },
];


export const NOTIFICATIONS = [
  {
    
    label: "Gift received",
    description: "John Osiri gifted $1000",
    note: 'hey you re the best thing, keep thriving '
  },
  {
   
    label: "Gift received",
    description: "@mannyJ gifted you $250",
    note: 'hey you re the best thing, keep thriving '
  },
  {
    
    label: "Gift received",
    description: "@mannyJ gifted you $250",
    note: 'hey you re the best thing, keep thriving '
  },

  {
  
    label: "Gift received",
    description: "@ziiis just gifted you $50",
    note: 'hey you re the best thing, keep thriving '
  },
];

