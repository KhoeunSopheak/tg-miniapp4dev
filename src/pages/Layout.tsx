import type { ReactNode, JSX } from "react"
import { Outlet, useLocation, Link } from "react-router-dom"
import { HomeIcon, MapPin, PieChart, Tag, Ticket, Zap, Info, Mail } from 'lucide-react'
import { cn } from "../lib/utils"

interface NavItemProps {
  icon: ReactNode
  label: string
  path: string
}

const NavItem = ({ icon, label, path }: NavItemProps): JSX.Element => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <Link to={path} className="flex flex-col items-center group">
      <div 
        className={cn(
          "mb-1 transition-colors duration-200",
          "group-hover:text-[#5C9C31]",
          isActive ? "text-white-500" : "text-[#5C9C31]"
        )}
      >
        {icon}
      </div>
      <span 
        className={cn(
          "text-xs transition-colors duration-200",
          "group-hover:text-[#5C9C31]",
          isActive ? "text-white-500" : "text-[#5C9C31]"
        )}
      >
        {label}
      </span>
    </Link>
  )
}

const Layout = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Main content area - FIXED: Changed to overflow-y-auto to enable scrolling */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-bold">Fitness App</span>
          </div>
          
          {/* Main content - FIXED: Added a wrapper with proper height and overflow */}
          <div className="h-full ">
            <Outlet />
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation - Always visible and scrollable */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0",
        "bg-zinc-900/80 backdrop-blur-lg",
        "border-t border-zinc-800",
        "overflow-x-auto", // Enable horizontal scrolling
        "safe-area-bottom"
      )}>
        <div className={cn(
          "flex justify-start items-center",
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
        </div>
      </div>
    </div>
  )
}

export default Layout