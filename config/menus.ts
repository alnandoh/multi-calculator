
import {
  DashBoard,
  Grid,
  Files,
  Graph,
  ClipBoard,
  Cart,
  BarLeft,
  BarTop,
  ChartBar,
  PretentionChartLine,
  PretentionChartLine2,
  ChartArea,
  Sheild,
  Error,
  Diamond,
  Mail,
} from "@/components/svg";
import { Calculator, Home, HomeIcon } from "lucide-react";


export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu? : MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void;

  
}

export const menusConfig = {
  mainNav: [
    {
      title: "Calculator",
      icon: Calculator,
      child: [
        {
          title: "Calculator",
          href: "/calculator",
          icon: Graph,
        },
      ],
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Calculator",
        icon: Calculator,
        child: [
          {
            title: "Investment",
            href: "/investment",
            icon: Graph,
          },
          {
            title: "Mortgage",
            href: "/mortgage",
            icon: Home,
          },
        ],
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
    ],
  },
};


export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]