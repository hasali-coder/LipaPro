
import { useEffect, useState } from 'react';
import { Calendar, Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export function DashboardHeader() {
  const [greeting, setGreeting] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    // Set greeting based on time of day
    const hours = new Date().getHours();
    if (hours < 12) setGreeting('Good morning');
    else if (hours < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
    
    // Format current date
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(new Date().toLocaleDateString('en-US', options));
  }, []);
  
  return (
    <header className="bg-white border-b border-lipa-gray-light relative">
      {/* Kenya flag stripe at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-lipa-green via-lipa-black to-lipa-red absolute top-0 left-0"></div>
      
      <div className="container mx-auto px-6 py-6 pt-7">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="animate-slide-up">
            <h1 className="text-2xl font-bold text-lipa-gray-dark">{greeting}, John</h1>
            <div className="flex items-center mt-1 text-lipa-gray-medium">
              <Calendar size={14} className="mr-1" />
              <span className="text-sm">{currentDate}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative w-full md:w-64">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lipa-gray-medium" />
              <Input 
                placeholder="Search..." 
                className="pl-10 bg-lipa-gray border-lipa-gray-light focus:border-lipa-green focus:ring-lipa-green" 
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="relative border-lipa-gray-light hover:bg-lipa-gray-light"
                >
                  <Bell size={18} />
                  <span className="absolute -top-1 -right-1 bg-lipa-red text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-y-auto">
                  <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-3">
                    <p className="font-medium text-sm">New invoice paid</p>
                    <p className="text-xs text-lipa-gray-medium">Invoice #1234 has been paid by Client XYZ</p>
                    <p className="text-xs text-lipa-gray-medium mt-1">10 minutes ago</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-3">
                    <p className="font-medium text-sm">Invoice overdue</p>
                    <p className="text-xs text-lipa-gray-medium">Invoice #1001 is 7 days overdue</p>
                    <p className="text-xs text-lipa-gray-medium mt-1">2 hours ago</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer flex flex-col items-start py-3">
                    <p className="font-medium text-sm">New client registered</p>
                    <p className="text-xs text-lipa-gray-medium">ABC Corp. has registered as a new client</p>
                    <p className="text-xs text-lipa-gray-medium mt-1">Yesterday</p>
                  </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer flex justify-center text-lipa-green font-medium">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
