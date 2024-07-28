import { Home, BarChart2, Tag } from "lucide-react";
import Index from "./pages/Index.jsx";
import PriceComparison from "./pages/PriceComparison.jsx";
import WeeklyDeals from "./pages/WeeklyDeals.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Price Comparison",
    to: "/compare",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <PriceComparison />,
  },
  {
    title: "Weekly Deals",
    to: "/deals",
    icon: <Tag className="h-4 w-4" />,
    page: <WeeklyDeals />,
  },
];