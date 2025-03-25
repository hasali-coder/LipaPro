
import { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { NavItem } from './NavItem';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

export const Sidebar = ({ 
  isCollapsed, 
  setIsCollapsed, 
  isMobile, 
  isSidebarOpen, 
  setIsSidebarOpen 
}: SidebarProps) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Invoices', path: '/invoices' },
    { icon: Users, label: 'Clients', path: '/clients' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];
  
  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-20 flex flex-col bg-white shadow-subtle transition-all duration-300 border-r border-lipa-gray-light overflow-hidden ${
        isSidebarOpen ? (isCollapsed ? 'w-20' : 'w-64') : '-translate-x-full'
      } ${isMobile ? 'top-0 h-full' : 'pt-16'}`}
    >
      {/* Sidebar Header - Only show on mobile */}
      {isMobile && (
        <div className="px-4 py-4 flex items-center justify-between border-b border-lipa-gray-light">
          <div className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-lipa-green to-lipa-red text-white h-8 w-8 rounded-md flex items-center justify-center">LP</span>
            {!isCollapsed && <span className="font-semibold">LipaPro</span>}
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsSidebarOpen(false)}
          >
            <ChevronLeft size={18} />
          </Button>
        </div>
      )}
      
      {/* Kenya flag stripe at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-lipa-green via-lipa-black to-lipa-red"></div>
      
      {/* Main Navigation */}
      <div className={`flex-1 overflow-y-auto px-3 py-6`}>
        <div className="mb-8">
          <Button 
            className={`bg-lipa-red hover:bg-lipa-red/90 text-white shadow-red-glow w-full ${
              isCollapsed ? 'p-2' : 'px-4 py-2'
            } transition-all duration-300 rounded-lg`}
          >
            <Plus size={isCollapsed ? 20 : 16} className={isCollapsed ? 'mx-auto' : 'mr-2'} />
            {!isCollapsed && <span>New Invoice</span>}
          </Button>
        </div>
        
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavItem 
              key={item.label} 
              icon={item.icon} 
              label={item.label} 
              path={item.path} 
              isCollapsed={isCollapsed} 
            />
          ))}
        </nav>
      </div>
      
      {/* Sidebar Footer */}
      <div className={`p-4 border-t border-lipa-gray-light ${isCollapsed ? 'text-center' : ''}`}>
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-lipa-green-light w-10 h-10 flex items-center justify-center text-lipa-green font-medium">
            JD
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-lipa-gray-medium">john@example.com</p>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-lipa-gray-medium hover:text-lipa-gray-dark hover:bg-lipa-gray-light rounded-lg h-9 w-9">
                  <HelpCircle size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Help & Support</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-lipa-gray-medium hover:text-lipa-gray-dark hover:bg-lipa-gray-light rounded-lg h-9 w-9">
                  <LogOut size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Logout</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto text-lipa-gray-medium hover:text-lipa-gray-dark hover:bg-lipa-gray-light rounded-lg h-9 w-9"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
