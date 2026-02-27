import type { IconType } from "react-icons";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RxGlobe } from "react-icons/rx";
import { GoShieldCheck } from "react-icons/go";

export const data: {
  card: { id: number; title: string; icon: IconType }[];
} = {
  card: [
    {
      id: 1,
      title: "instant productivity",
      icon: AiOutlineThunderbolt,
    },
    {
      id: 2,
      title: "expense management",
      icon: RxGlobe,
    },
    {
      id: 3,
      title: "advanced technology",
      icon: GoShieldCheck,
    },
  ],
};
