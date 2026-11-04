import {
  ArrowLeftRightIcon,
  WalletIcon,
  TargetIcon,
  RefreshCwIcon,
  LayoutDashboardIcon,
  PackageIcon,
  WrenchIcon,
  SquareCheckBigIcon,
  CalendarDaysIcon,
  ChartColumnIcon,
  FileTextIcon,
} from "lucide-react";

interface NavSubItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

interface NavigationItems {
  title: string;
  items: NavSubItem[];
}

const financeNav: NavigationItems = {
  title: "finance",
  items: [
    {
      title: "Transactions",
      url: "/finance/transactions",
      icon: <ArrowLeftRightIcon />,
    },
    { title: "Accounts", url: "/finance/accounts", icon: <WalletIcon /> },
    {
      title: "Budget",
      url: "/finance/budget",
      icon: <TargetIcon />,
    },
    { title: "Recurring", url: "/finance/recurring", icon: <RefreshCwIcon /> },
  ],
};

const assetsNav: NavigationItems = {
  title: "assets",
  items: [
    {
      title: "Assets",
      url: "/assets",
      icon: <PackageIcon />,
    },
    {
      title: "Maintenance",
      url: "/assets/maintenance",
      icon: <WrenchIcon />,
    },
  ],
};

const homeNav: NavigationItems = {
  title: "home",
  items: [
    {
      title: "Tasks",
      url: "/home/tasks",
      icon: <SquareCheckBigIcon />,
    },
    {
      title: "Important Dates",
      url: "/home/important-dates",
      icon: <CalendarDaysIcon />,
    },
  ],
};

const reportNav: NavigationItems = {
  title: "reports",
  items: [
    {
      title: "Analytics",
      url: "/reports/analytics",
      icon: <ChartColumnIcon />,
    },
    {
      title: "Performance",
      url: "/reports/performance",
      icon: <FileTextIcon />,
    },
  ],
};

export const navigations: NavigationItems[] = [
  {
    title: "overview",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: <LayoutDashboardIcon />,
      },
    ],
  },
  financeNav,
  assetsNav,
  homeNav,
  reportNav,
];
