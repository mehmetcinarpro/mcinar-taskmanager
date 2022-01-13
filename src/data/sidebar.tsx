import { ChartPieIcon, ClipboardListIcon, HomeIcon, TableIcon } from "@heroicons/react/outline";

const items = [
  {
    name: "Home",
    url: "/",
    icon: HomeIcon,
    active: true,
  },
  {
    url: "/forms",
    icon: ClipboardListIcon,
    name: "Forms",
    active: true,
  },
  {
    url: "/charts",
    icon: ChartPieIcon,
    name: "Charts",
    active: true
  },
  {
    url: "/tables",
    icon: TableIcon,
    name: "Tables",
    active: true
  }
];

export default items;
