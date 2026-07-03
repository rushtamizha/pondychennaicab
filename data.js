import {
  MapPin,
  Ship,
  Waves,
  Car,
  Package,
  Home,
  Hotel,
  Info,
  Camera,
  Users,
  Star,
  Palmtree,
  Mountain,
  Briefcase,
  Heart,
  Zap,
} from "lucide-react";
import { BsCash } from "react-icons/bs";

export const navData = [
  { name: "Home", link: "/", icon: <Home size={16} /> },

  {
    name: "Tour Packages",
    slug: "tours",
    icon: <Package size={16} />,
    // items: [
    //   {
    //     name: "Valparai Tour Packages",
    //     slug: "valparai-tours",
    //     icon: <MapPin size={14} />,
    //     items: [
    //       {
    //         name: "2D 1N Pollachi Valparai Tour Package",
    //         slug: "pollachi-valparai-2d-1n",
    //       },
    //       {
    //         name: "3D 2N Pollachi Topslip Parambikulam Valparai",
    //         slug: "pollachi-topslip-parambikulam-valparai-3d-2n",
    //       },
    //       {
    //         name: "4D 3N Topslip Parambikulam Valparai Athirapally",
    //         slug: "topslip-parambikulam-valparai-athirapally-4d-3n",
    //       },
    //       {
    //         name: "5D 4N Coimbatore Isha Marudamalai Pollachi Valparai",
    //         slug: "coimbatore-isha-valparai-5d-4n",
    //       },
    //     ],
    //   },

    //   {
    //     name: "Ooty Tour Packages",
    //     slug: "ooty-tours",
    //     icon: <MapPin size={14} />,
    //     items: [
    //       {
    //         name: "3D 2N Coonoor Ooty Pykara Mudumalai",
    //         slug: "coimbatore-ooty-mudumalai-3d-2n",
    //       },
    //       {
    //         name: "4D 3N Coimbatore Coonoor Ooty Pykara Masinagudi",
    //         slug: "coimbatore-ooty-masinagudi-4d-3n",
    //       },
    //       {
    //         name: "6D 5N Grand Kodaikanal Ooty Coonoor Mudumalai",
    //         slug: "coimbatore-kodai-ooty-mudumalai-6d-5n",
    //       },
    //     ],
    //   },

    //   {
    //     name: "Kodaikanal Tour Packages",
    //     slug: "kodaikanal-tours",
    //     icon: <MapPin size={14} />,
    //     items: [
    //       {
    //         name: "3D 2N Kodaikanal Local & Sightseeing",
    //         slug: "kodai-road-kodaikanal-3d-2n",
    //       },
    //     ],
    //   },

    //   {
    //     name: "Kerala Tour Packages",
    //     slug: "kerala-tours",
    //     icon: <MapPin size={14} />,
    //     items: [
    //       {
    //         name: "3D 2N Kanthaloor Marayoor Munnar Tour",
    //         slug: "coimbatore-kanthaloor-marayoor-munnar-3d-2n",
    //       },
    //       {
    //         name: "4D 3N Cochin Munnar Kanthaloor Marayoor",
    //         slug: "cochin-munnar-kanthaloor-marayoor-4d-3n",
    //       },
    //       {
    //         name: "5D 4N Wonders of Kerala Coimbatore Departure",
    //         slug: "coimbatore-kerala-wonders-5d-4n",
    //       },
    //       {
    //         name: "6D 5N Cochin Alleppey Munnar Thekkady",
    //         slug: "cochin-alleppey-munnar-thekkady-6d-5n",
    //       },
    //       {
    //         name: "10D 9N Cochin To Wayanad Trivandrum Grand Tour",
    //         slug: "kerala-panorama-10d-9n",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: "Hotels",
    slug: "hotels",
    link: "/#hotels",
    icon: <Hotel size={16} />,
  },
  {
    name: "Car Rentals",
    slug: "/#car-rentals",
    link: "/#car-rentals",
    icon: <Car size={16} />,
  },
  {
    hider:true,
    name: "Valparai Guide",
    slug: "valparai",
    icon: <Info size={16} />,
    // items: [
    //   {
    //     name: "About Valparai",
    //     slug: "valparai-about",
    //     icon: <Info size={14} />,
    //   },
    //   {
    //     name: "Top Attractions",
    //     slug: "attractions",
    //     icon: <Camera size={14} />,
    //   },
    // ],
  },
  {
    name: "Payment Info",
    slug: "/payment",
    link: "/payment",
    icon: <BsCash size={16} />,
  },
];
