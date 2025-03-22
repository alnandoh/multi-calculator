
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
      title: "Dashboard",
      icon: DashBoard,
      child: [
        {
          title: "Analytics",
          href: "/dashboard",
          icon: Graph,
        },
        {
          title: "Ecommerce",
          href: "/ecommerce",
          icon: Cart,
        },
        {
          title: "Project ",
          href: "/project",
          icon: ClipBoard,
        },
      ],
    },

    {
      title: "Tables",
      icon: Grid,
      child: [
        {
          title: "Simple Table",
          href: "/simple-table",
          icon: BarLeft,
        },
        {
          title: "tailwindui table",
          href: "/tailwindui-table",
          icon: BarLeft,
        },
        {
          title: "Data Table",
          href: "/data-table",
          icon: BarTop,
        },
      ],
    },
    {
      title: "Chart",
      icon: ChartArea,
      megaMenu: [
        {
          title: "Apex Chart",
          icon: ChartBar,
          child: [
            {
              title: "Line",
              href: "/charts-appex-line",
              icon: "heroicons:information-circle",
            },
            {
              title: "Area",
              href: "/charts-appex-area",
              icon: "heroicons:information-circle",
            },
            {
              title: "Column",
              href: "/charts-appex-column",
              icon: "heroicons:information-circle",
            },
            {
              title: "Bar",
              href: "/charts-appex-bar",
              icon: "heroicons:information-circle",
            },
            {
              title: "Combo/Mixed",
              href: "/charts-appex-combo",
              icon: "heroicons:information-circle",
            },
            {
              title: "Range Area",
              href: "/charts-appex-range",
              icon: "heroicons:information-circle",
            },
            {
              title: "Timeline",
              href: "/charts-appex-timeline",
              icon: "heroicons:information-circle",
            },
            {
              title: "Funnel",
              href: "/charts-appex-funnel",
              icon: "heroicons:information-circle",
            },
            {
              title: "Candle Stick",
              href: "/charts-appex-candlestick",
              icon: "heroicons:information-circle",
            },
            {
              title: "Boxplot",
              href: "/charts-appex-boxplot",
              icon: "heroicons:information-circle",
            },
            {
              title: "Pie",
              href: "/charts-appex-pie",
              icon: "heroicons:information-circle",
            },
            {
              title: "Radar",
              href: "/charts-appex-radar",
              icon: "heroicons:information-circle",
            },
            {
              title: "Polar Area",
              href: "/charts-appex-polararea",
              icon: "heroicons:information-circle",
            },
            {
              title: "Radial Bars",
              href: "/charts-appex-radialbars",
              icon: "heroicons:information-circle",
            },
            {
              title: "Bubble",
              href: "/charts-appex-bubble",
              icon: "heroicons:information-circle",
            },
            {
              title: "Scatter",
              href: "/charts-appex-scatter",
              icon: "heroicons:information-circle",
            },
            {
              title: "Heatmap",
              href: "/charts-appex-heatmap",
              icon: "heroicons:information-circle",
            },
            {
              title: "Treemap",
              href: "/charts-appex-treemap",
              icon: "heroicons:information-circle",
            },
          ],
        },
        {
          title: "Re Chart",
          icon: PretentionChartLine,
          child: [
            {
              title: "Line",
              href: "/charts-rechart-line",
              icon: "heroicons:information-circle",
            },
            {
              title: "Area",
              href: "/charts-rechart-area",
              icon: "heroicons:information-circle",
            },
            {
              title: "Bar",
              href: "/charts-rechart-bar",
              icon: "heroicons:information-circle",
            },
            {
              title: "Scatter",
              href: "/charts-rechart-scatter",
              icon: "heroicons:information-circle",
            },
            {
              title: "Composed",
              href: "/charts-rechart-composed",
              icon: "heroicons:information-circle",
            },
            {
              title: "Pie",
              href: "/charts-rechart-pie",
              icon: "heroicons:information-circle",
            },
            {
              title: "Radar",
              href: "/charts-rechart-radar",
              icon: "heroicons:information-circle",
            },
            {
              title: "Radial Bar",
              href: "/charts-rechart-radialbar",
              icon: "heroicons:information-circle",
            },
            {
              title: "Tree Map",
              href: "/charts-rechart-treemap",
              icon: "heroicons:information-circle",
            },
          ],
        },
        {
          title: "chart js",
          icon: PretentionChartLine2,
          child: [
            {
              title: "Bar",
              href: "/charts-chartjs-bar",
              icon: "heroicons:information-circle",
            },
            {
              title: "Line",
              href: "/charts-chartjs-line",
              icon: "heroicons:information-circle",
            },
            {
              title: "Area",
              href: "/charts-chartjs-area",
              icon: "heroicons:information-circle",
            },
            {
              title: "Other",
              href: "/charts-chartjs-other",
              icon: "heroicons:information-circle",
            },
            {
              title: "Scales",
              href: "/charts-chartjs-scales",
              icon: "heroicons:information-circle",
            },
            {
              title: "Scale Options",
              href: "/charts-chartjs-scaleoptions",
              icon: "heroicons:information-circle",
            },
            {
              title: "Legend",
              href: "/charts-chartjs-legend",
              icon: "heroicons:information-circle",
            },
            {
              title: "Title",
              href: "/charts-chartjs-title",
              icon: "heroicons:information-circle",
            },
            {
              title: "Tooltip",
              href: "/charts-chartjs-tooltip",
              icon: "heroicons:information-circle",
            },
            {
              title: "Scriptable Options",
              href: "/charts-chartjs-scriptable",
              icon: "heroicons:information-circle",
            },
            {
              title: "Animations",
              href: "/charts-chartjs-animations",
              icon: "heroicons:information-circle",
            },
          ],
        },
        {
          title: "unovis",
          icon: PretentionChartLine,
          child: [
            {
              title: "Line",
              href: "/charts-unovis-line",
              icon: "heroicons:information-circle",
            },
            {
              title: "Bar",
              href: "/charts-unovis-bar",
              icon: "heroicons:information-circle",
            },
            {
              title: "Area",
              href: "/charts-unovis-area",
              icon: "heroicons:information-circle",
            },
            {
              title: "Scatter",
              href: "/charts-unovis-scatter",
              icon: "heroicons:information-circle",
            },
          ],
        },
      ],
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: DashBoard,
        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Ecommerce",
            href: "/ecommerce",
            icon: Cart,
          },
          {
            title: "project ",
            href: "/project",
            icon: ClipBoard,
          },
        ],
      },

      {
        title: "Tables",
        icon: Grid,
        child: [
          {
            title: "Simple Table",
            href: "/simple-table",
            icon: BarLeft,
          },
          {
            title: "tailwindui table",
            href: "/tailwindui-table",
            icon: BarLeft,
          },
          {
            title: "Data Table",
            href: "/data-table",
            icon: BarTop,
          },
        ],
      },

      {
        title: "Chart",
        icon: ChartArea,
        child: [
          {
            title: "Apex Chart",
            icon: ChartBar,
            nested: [
              {
                title: "Line",
                href: "/charts-appex-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-appex-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Column",
                href: "/charts-appex-column",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bar",
                href: "/charts-appex-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Combo/Mixed",
                href: "/charts-appex-combo",
                icon: "heroicons:information-circle",
              },
              {
                title: "Range Area",
                href: "/charts-appex-range",
                icon: "heroicons:information-circle",
              },
              {
                title: "Timeline",
                href: "/charts-appex-timeline",
                icon: "heroicons:information-circle",
              },
              {
                title: "Funnel",
                href: "/charts-appex-funnel",
                icon: "heroicons:information-circle",
              },
              {
                title: "Candle Stick",
                href: "/charts-appex-candlestick",
                icon: "heroicons:information-circle",
              },
              {
                title: "Boxplot",
                href: "/charts-appex-boxplot",
                icon: "heroicons:information-circle",
              },
              {
                title: "Pie",
                href: "/charts-appex-pie",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radar",
                href: "/charts-appex-radar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Polar Area",
                href: "/charts-appex-polararea",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radial Bars",
                href: "/charts-appex-radialbars",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bubble",
                href: "/charts-appex-bubble",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scatter",
                href: "/charts-appex-scatter",
                icon: "heroicons:information-circle",
              },
              {
                title: "Heatmap",
                href: "/charts-appex-heatmap",
                icon: "heroicons:information-circle",
              },
              {
                title: "Treemap",
                href: "/charts-appex-treemap",
                icon: "heroicons:information-circle",
              },
            ],
          },
          {
            title: "Re Chart",
            icon: PretentionChartLine,
            nested: [
              {
                title: "Line",
                href: "/charts-rechart-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-rechart-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bar",
                href: "/charts-rechart-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scatter",
                href: "/charts-rechart-scatter",
                icon: "heroicons:information-circle",
              },
              {
                title: "Composed",
                href: "/charts-rechart-composed",
                icon: "heroicons:information-circle",
              },
              {
                title: "Pie",
                href: "/charts-rechart-pie",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radar",
                href: "/charts-rechart-radar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radial Bar",
                href: "/charts-rechart-radialbar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Tree Map",
                href: "/charts-rechart-treemap",
                icon: "heroicons:information-circle",
              },
            ],
          },
          {
            title: "chart js",
            icon: PretentionChartLine2,
            nested: [
              {
                title: "Bar",
                href: "/charts-chartjs-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Line",
                href: "/charts-chartjs-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-chartjs-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Other",
                href: "/charts-chartjs-other",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scales",
                href: "/charts-chartjs-scales",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scale Options",
                href: "/charts-chartjs-scaleoptions",
                icon: "heroicons:information-circle",
              },
              {
                title: "Legend",
                href: "/charts-chartjs-legend",
                icon: "heroicons:information-circle",
              },
              {
                title: "Title",
                href: "/charts-chartjs-title",
                icon: "heroicons:information-circle",
              },
              {
                title: "Tooltip",
                href: "/charts-chartjs-tooltip",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scriptable Options",
                href: "/charts-chartjs-scriptable",
                icon: "heroicons:information-circle",
              },
              {
                title: "Animations",
                href: "/charts-chartjs-animations",
                icon: "heroicons:information-circle",
              },
            ],
          },
          {
            title: "unovis",
            icon: PretentionChartLine,
            nested: [
              {
                title: "Line",
                href: "/charts-unovis-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bar",
                href: "/charts-unovis-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-unovis-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scatter",
                href: "/charts-unovis-scatter",
                icon: "heroicons:information-circle",
              },
            ],
          },
        ],
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",
       
        
        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Ecommerce",
            href: "/ecommerce",
            icon: Cart,
          },
          {
            title: "Project ",
            href: "/project",
            icon: ClipBoard,
          },
        ],
      },

      {
        isHeader: true,
        title: "Pages",
      },
      {
        title: "Authentication",
        icon: Sheild,
        child: [
          {
            title: "Sign In 01",
            href: "/auth/login",
          },
          {
            title: "Sign In 02",
            href: "/auth/login2",
          },
          {
            title: "Sign In 03",
            href: "/auth/login3",
          },
          {
            title: "Sign In 04",
            href: "/auth/login4",
          },
          {
            title: "Sign In 05",
            href: "/auth/login5",
          },
          {
            title: "Sign Up 01",
            href: "./auth/register",
          },
          {
            title: "Sign Up 02",
            href: "/auth/register2",
          },
          {
            title: "Sign Up 03",
            href: "/auth/register3",
          },
          {
            title: "Sign Up 04",
            href: "/auth/register4",
          },
          {
            title: "Sign Up 05",
            href: "/auth/register5",
          },
          {
            title: "Forget Password 01",
            href: "/auth/forgot",
          },
          {
            title: "Forget Password 02",
            href: "/auth/forgot2",
          },
          {
            title: "Forget Password 03",
            href: "/auth/forgot3",
          },
          {
            title: "Forget Password 04",
            href: "/auth/forgot4",
          },
          {
            title: "Forget Password 05",
            href: "/auth/forgot5",
          },
          {
            title: "Lock Screen 01",
            href: "/auth/lock",
          },
          {
            title: "Lock Screen 02",
            href: "/auth/lock2",
          },
          {
            title: "Lock Screen 03",
            href: "/auth/lock3",
          },
          {
            title: "Lock Screen 04",
            href: "/auth/lock4",
          },
          {
            title: "Lock Screen 04",
            href: "/auth/lock5",
          },
          {
            title: "Two-Step 01",
            href: "/auth/verify",
          },
          {
            title: "Two-Step 02",
            href: "/auth/verify2",
          },
          {
            title: "Two-Step 03",
            href: "/auth/verify3",
          },
          {
            title: "Two-Step 04",
            href: "/auth/verify4",
          },
          {
            title: "Two-Step 05",
            href: "/auth/verify5",
          },
          {
            title: "Password Create 01",
            href: "/auth/create-password",
          },
          {
            title: "Password Create 02",
            href: "/auth/create-password2",
          },
          {
            title: "Password Create 03",
            href: "/auth/create-password3",
          },
          {
            title: "Password Create 04",
            href: "/auth/create-password4",
          },
          {
            title: "Password Create 05",
            href: "/auth/create-password5",
          },
        ],
      },
      {
        title: "Utility",
        icon: Diamond,
        href: "#",
        
        child: [
          {
            title: "Blank Page",
            href: "/blank",
          },
          {
            title: "Comming Soon",
            href: "/utility/comming-soon",
          },
          {
            title: "Under Maintinance",
            href: "/utility/maintinance",
          },
        ],
      },
      {
        title: "Invoice",
        icon: Files,
        href: "#",
        
        child: [
          {
            title: "Create Invoice",
            href: "/create-invoice",
          },
          {
            title: "Invoice Details",
            href: "/invoice-details",
          },
          {
            title: "Invoice List",
            href: "/invoice-list",
          },
        ],
      },

      {
        title: "Error",
        icon: Error,
        href: "#",
        
        child: [
          {
            title: "Error 401",
            href: "/error-page/401",
          },
          {
            title: "Error 403",
            href: "/error-page/403",
          },
          {
            title: "Error 404",
            href: "/error-page/404",
          },
          {
            title: "Error 419",
            href: "/error-page/419",
          },
          {
            title: "Error 429",
            href: "/error-page/429",
          },
          {
            title: "Error 500",
            href: "/error-page/500",
          },
          {
            title: "Error 503",
            href: "/error-page/503",
          },
        ],
      },
      {
        title: "Email Template",
        icon: Mail,
        child: [
          {
            title: "Welcome",
            multi_menu: [
              {
                title: "Advanced",
                href: "/react-email/welcome/advanced",
              },
              {
                title: "Basic",
                href: "/react-email/welcome/basic",
              },
            ],
          },
          {
            title: "Authentication",
            multi_menu: [
              {
                title: "Reset Password 1",
                href: "/react-email/auth/reset-password-1",
              },
              {
                title: "Reset Password 2",
                href: "/react-email/auth/reset-password-2",
              },
              {
                title: "Verify Email",
                href: "/react-email/auth/verify-email",
              },
              {
                title: "Verify Otp",
                href: "/react-email/auth/verify-otp",
              },
            ],
          },
          {
            title: "Ecommerce",
            multi_menu: [
              {
                title: "Shop",
                href: "/react-email/ecommerce/shop",
              },
              {
                title: "Shopping Cart",
                href: "/react-email/ecommerce/shopping-cart",
              },
            ],
          },
          {
            title: "Corporate",
            href: "/react-email/corporate",
          },
          {
            title: "Agency",
            href: "/react-email/agency",
          },
          {
            title: "Blog",
            href: "/react-email/blog",
          },
          {
            title: "Photography",
            href: "/react-email/photography",
          },
        ],
      },
      {
        isHeader: true,
        title: "Elements",
      },
      {
        title: "Table",
        icon: Grid,
        child: [
          {
            title: "Simple Table",
            href: "/simple-table",
            icon: BarLeft,
          },
          {
            title: "tailwindui table",
            href: "/tailwindui-table",
            icon: BarLeft,
          },
          {
            title: "Data Table",
            href: "/data-table",
            icon: BarTop,
          },
        ],
      },
      {
        title: "Chart",
        icon: ChartArea,
        child: [
          {
            title: "Apex Chart",
            icon: ChartBar,
            multi_menu: [
              {
                title: "Line",
                href: "/charts-appex-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-appex-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Column",
                href: "/charts-appex-column",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bar",
                href: "/charts-appex-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Combo/Mixed",
                href: "/charts-appex-combo",
                icon: "heroicons:information-circle",
              },
              {
                title: "Range Area",
                href: "/charts-appex-range",
                icon: "heroicons:information-circle",
              },
              {
                title: "Timeline",
                href: "/charts-appex-timeline",
                icon: "heroicons:information-circle",
              },
              {
                title: "Funnel",
                href: "/charts-appex-funnel",
                icon: "heroicons:information-circle",
              },
              {
                title: "Candle Stick",
                href: "/charts-appex-candlestick",
                icon: "heroicons:information-circle",
              },
              {
                title: "Boxplot",
                href: "/charts-appex-boxplot",
                icon: "heroicons:information-circle",
              },
              {
                title: "Pie",
                href: "/charts-appex-pie",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radar",
                href: "/charts-appex-radar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Polar Area",
                href: "/charts-appex-polararea",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radial Bars",
                href: "/charts-appex-radialbars",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bubble",
                href: "/charts-appex-bubble",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scatter",
                href: "/charts-appex-scatter",
                icon: "heroicons:information-circle",
              },
              {
                title: "Heatmap",
                href: "/charts-appex-heatmap",
                icon: "heroicons:information-circle",
              },
              {
                title: "Treemap",
                href: "/charts-appex-treemap",
                icon: "heroicons:information-circle",
              },
            ],
          },
          {
            title: "Re Chart",
            icon: PretentionChartLine,
            multi_menu: [
              {
                title: "Line",
                href: "/charts-rechart-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-rechart-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bar",
                href: "/charts-rechart-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scatter",
                href: "/charts-rechart-scatter",
                icon: "heroicons:information-circle",
              },
              {
                title: "Composed",
                href: "/charts-rechart-composed",
                icon: "heroicons:information-circle",
              },
              {
                title: "Pie",
                href: "/charts-rechart-pie",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radar",
                href: "/charts-rechart-radar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Radial Bar",
                href: "/charts-rechart-radialbar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Tree Map",
                href: "/charts-rechart-treemap",
                icon: "heroicons:information-circle",
              },
            ],
          },
          {
            title: "Chart js",
            icon: PretentionChartLine2,
            multi_menu: [
              {
                title: "Bar",
                href: "/charts-chartjs-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Line",
                href: "/charts-chartjs-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-chartjs-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Other",
                href: "/charts-chartjs-other",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scales",
                href: "/charts-chartjs-scales",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scale Options",
                href: "/charts-chartjs-scaleoptions",
                icon: "heroicons:information-circle",
              },
              {
                title: "Legend",
                href: "/charts-chartjs-legend",
                icon: "heroicons:information-circle",
              },
              {
                title: "Title",
                href: "/charts-chartjs-title",
                icon: "heroicons:information-circle",
              },
              {
                title: "Tooltip",
                href: "/charts-chartjs-tooltip",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scriptable Options",
                href: "/charts-chartjs-scriptable",
                icon: "heroicons:information-circle",
              },
              {
                title: "Animations",
                href: "/charts-chartjs-animations",
                icon: "heroicons:information-circle",
              },
            ],
          },
          {
            title: "Unovis",
            icon: PretentionChartLine,
            multi_menu: [
              {
                title: "Line",
                href: "/charts-unovis-line",
                icon: "heroicons:information-circle",
              },
              {
                title: "Bar",
                href: "/charts-unovis-bar",
                icon: "heroicons:information-circle",
              },
              {
                title: "Area",
                href: "/charts-unovis-area",
                icon: "heroicons:information-circle",
              },
              {
                title: "Scatter",
                href: "/charts-unovis-scatter",
                icon: "heroicons:information-circle",
              },
            ],
          },
        ],
      },
    ],
  },
};


export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]