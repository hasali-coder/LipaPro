import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Invoices', path: '/invoices' },
    { name: 'Clients', path: '/clients' },
    { name: 'Reports', path: '/reports' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-semibold">
          <span className="bg-gradient-to-r from-lipa-green to-lipa-red text-white h-8 w-8 rounded-md flex items-center justify-center">LP</span>
          <span className="hidden sm:block">LipaPro</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm transition-colors duration-200 ${
                isActive(item.path)
                  ? 'text-lipa-red font-medium'
                  : 'text-lipa-gray-dark hover:text-lipa-green'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-1 text-sm font-medium text-lipa-gray-dark border-lipa-gray-light hover:bg-lipa-green hover:text-white transition-all duration-300"
              >
                Create New <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 p-2 bg-white rounded-lg shadow-elevated border border-lipa-gray-light">
              <DropdownMenuItem className="cursor-pointer hover:bg-lipa-green-light hover:text-lipa-green rounded">
                <Link to="/new-invoice" className="flex items-center w-full py-1">
                  New Invoice
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-lipa-green-light hover:text-lipa-green rounded">
                <Link to="/new-client" className="flex items-center w-full py-1">
                  New Client
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-lipa-green-light hover:text-lipa-green rounded">
                <Link to="/new-expense" className="flex items-center w-full py-1">
                  New Expense
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-lipa-green-light hover:text-lipa-green rounded">
                <Link to="/new-quote" className="flex items-center w-full py-1">
                  New Quote
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-lipa-red hover:bg-lipa-red/90 text-white transition-all duration-300 font-medium shadow-red-glow">
            Get Started
          </Button>
        </div>

        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
