import {
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  SearchIcon,
  Search,
  Gift,
  GiftIcon,
  Edit,
  Share,
  Settings,
  Lock,
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
    label: "Discover contacts",
    icon: Search,
    href: "/contacts",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Surprise a stranger",
    icon: Gift,
    href: "/featured",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export const profile = [
  {
    label: "Edit information",
    icon: Edit,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Share profile",
    icon: Share,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Settings",
    icon: Settings,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Pro",
    icon: Lock,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
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