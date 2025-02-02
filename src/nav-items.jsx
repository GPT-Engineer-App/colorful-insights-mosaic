import { User } from "lucide-react";
import MariusInteractiveDashboard from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Marius Wilsch",
    to: "/",
    icon: <User className="h-4 w-4" />,
    page: <MariusInteractiveDashboard />,
  },
];
