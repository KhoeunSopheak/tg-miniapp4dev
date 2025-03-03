import type { ReactNode, JSX } from "react"
import { Outlet } from "react-router-dom"
import { HomeIcon, MapPin, PieChart, Tag, Ticket, Zap, Info, Mail } from 'lucide-react'
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils"
import "../index.css"

interface NavItemProps {
  icon: ReactNode;
  label: string;
  path: string;
}

const NavItem = ({ icon, label, path }: NavItemProps): JSX.Element => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path} className="flex flex-col items-center group cursor-pointer shrink-0 px-4">
      <div
        className={cn(
          "mb-1 transition-colors duration-200",
          "group-hover:text-white",
          isActive ? "text-white" : "text-[#5C9C31]"
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "text-xs transition-colors duration-200",
          "group-hover:text-white",
          isActive ? "text-white" : "text-[#5C9C31]"
        )}
      >
        {label}
      </span>
    </Link>
  );
};

const Layout = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white">
      {/* Main content wrapper */}
      <div className="flex-1 pb-20">
        <div className="max-w-7xl mx-auto p-4">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold">Fitness App</span>
          </div>
          {/* Main content */}
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation - Always visible and scrollable */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0",
        "bg-zinc-900/80 backdrop-blur-lg",
        "border-t border-zinc-800",
        "overflow-x-auto whitespace-nowrap", // Enable horizontal scrolling
        "safe-area-bottom"
      )}>
        <div className={cn(
          "flex justify-start items-center overflow-x-auto",
          "px-4 py-3 space-x-6" // Spacing between items
        )}>
          <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Home" path="/" />
          <NavItem icon={<MapPin className="h-5 w-5" />} label="Branch" path="/gymbranch" />
          <NavItem icon={<PieChart className="h-5 w-5" />} label="Pricing" path="/pricing" />
          <NavItem icon={<Tag className="h-5 w-5" />} label="Promotion" path="/promotion" />
          <NavItem icon={<Ticket className="h-5 w-5" />} label="Coupon" path="/coupon" />
          <NavItem icon={<Zap className="h-5 w-5" />} label="Workout" path="/workout" />
          <NavItem icon={<Info className="h-5 w-5" />} label="Info" path="/info" />
          <NavItem icon={<Mail className="h-5 w-5" />} label="Contact" path="/contact" />
          {/* Add more NavItems here as needed */}
        </div>
      </div>
    </div>
  );
};

export default Layout;