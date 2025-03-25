
import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sidebar } from './Sidebar';
import { MobileSidebarTrigger } from './MobileSidebarTrigger';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  
  useEffect(() => {
    setIsSidebarOpen(!isMobile);
  }, [isMobile]);
  
  return (
    <div className="flex h-screen overflow-hidden bg-lipa-gray relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-kenya-wave bg-size-200 animate-wave-pattern opacity-5 z-0"></div>
      
      {/* Sidebar */}
      <Sidebar 
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Main Content */}
      <main 
        className={`flex-1 overflow-y-auto transition-all duration-300 pt-16 relative z-10 ${
          isSidebarOpen && !isMobile ? (isCollapsed ? 'ml-20' : 'ml-64') : 'ml-0'
        }`}
      >
        {/* Mobile Sidebar Trigger */}
        {isMobile && !isSidebarOpen && (
          <MobileSidebarTrigger setIsSidebarOpen={setIsSidebarOpen} />
        )}
        
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
