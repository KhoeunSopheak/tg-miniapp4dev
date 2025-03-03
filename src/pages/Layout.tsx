import type { ReactNode, JSX } from "react"
import { Outlet } from "react-router-dom"
import { HomeIcon, MapPin, PieChart, Tag, Ticket, Zap, Info, Mail } from 'lucide-react'
import { cn } from "../lib/utils"
import "../index.css"

interface NavItemProps {
  icon: ReactNode
  label: string
  active?: boolean
}

const NavItem = ({ icon, label, active = false }: NavItemProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center group cursor-pointer shrink-0 px-4">
      <div 
        className={cn(
          "mb-1 transition-colors duration-200",
          "group-hover:text-green-400",
          active ? "text-green-500" : "text-gray-500"
        )}
      >
        {icon}
      </div>
      <span 
        className={cn(
          "text-xs transition-colors duration-200",
          "group-hover:text-green-400",
          active ? "text-green-500" : "text-gray-500"
        )}
      >
        {label}
      </span>
    </div>
  )
}

const Layout = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
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
          <NavItem icon={<HomeIcon className="h-5 w-5" />} label="Home" active />
          <NavItem icon={<MapPin className="h-5 w-5" />} label="Branch" />
          <NavItem icon={<PieChart className="h-5 w-5" />} label="Pricing" />
          <NavItem icon={<Tag className="h-5 w-5" />} label="Promotion" />
          <NavItem icon={<Ticket className="h-5 w-5" />} label="Coupon" />
          <NavItem icon={<Zap className="h-5 w-5" />} label="Workout" />
          <NavItem icon={<Info className="h-5 w-5" />} label="Info" />
          <NavItem icon={<Mail className="h-5 w-5" />} label="Contact" />
          {/* Add more NavItems here as needed */}
        </div>
      </div>
    </div>
  )
}

export default Layout
