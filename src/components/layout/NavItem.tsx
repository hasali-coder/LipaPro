
import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  path: string;
  isCollapsed: boolean;
}

export const NavItem = ({ icon: Icon, label, path, isCollapsed }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;
  
  return (
    <Link 
      to={path} 
      className={`flex items-center py-3 px-4 rounded-lg font-medium transition-all duration-300 group ${
        isActive 
          ? "bg-lipa-green-light text-lipa-green" 
          : "text-lipa-gray-dark hover:bg-lipa-gray-light"
      }`}
    >
      <Icon className={`${isActive ? "text-lipa-green" : ""} ${isCollapsed ? "mx-auto" : "mr-3"}`} size={20} />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

export default NavItem;
