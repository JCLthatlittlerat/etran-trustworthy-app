import type { IconType } from "react-icons";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { RxGlobe } from "react-icons/rx";
import { GoShieldCheck } from "react-icons/go";

export const data: {
  card: { id: number; title: string; icon: IconType | string }[];
  card2: { id: number; title: string; icon: string }[];
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
  card2: [
    {
      id: 1,
      title: "double your productivity",
      icon: `2x`,
    },
    {
      id: 2,
      title: "efficiency increase per transfer",
      icon: `/increasing-efficiency-graph.svg`,
    },
    {
      id: 3,
      title: "centralize your finance",
      icon: `/centralize-your-finances.svg`,
    },
    {
      id: 4,
      title: "more activity",
      icon: `100%`,
    },
  ],
};
