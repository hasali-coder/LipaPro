
import { useState } from 'react';
import { MoreHorizontal, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface InvoiceProps {
  id: string;
  client: string;
  amount: string;
  date: string;
  dueDate: string;
  status: 'paid' | 'pending' | 'draft' | 'overdue';
  delay: number;
}

export function InvoiceCard({ id, client, amount, date, dueDate, status, delay }: InvoiceProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const statusLabels = {
    paid: 'Paid',
    pending: 'Pending',
    draft: 'Draft',
    overdue: 'Overdue'
  };
  
  return (
    <div 
      className="relative bg-white rounded-xl border border-invoice-gray-light p-4 transition-all duration-300 hover:shadow-elevated cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${delay * 100}ms`,
        animation: 'slideUp 0.5s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-md bg-invoice-blue-light flex items-center justify-center mr-3">
            <FileText size={18} className="text-invoice-blue" />
          </div>
          <div>
            <h3 className="font-medium text-invoice-gray-dark">{id}</h3>
            <p className="text-sm text-invoice-gray-medium">{client}</p>
          </div>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-invoice-gray-medium">
              <MoreHorizontal size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit Invoice</DropdownMenuItem>
            <DropdownMenuItem>Download PDF</DropdownMenuItem>
            <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className={`grid grid-cols-3 gap-4 items-end transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div>
          <p className="text-xs text-invoice-gray-medium mb-1">Amount</p>
          <p className="font-medium text-invoice-gray-dark">{amount}</p>
        </div>
        <div>
          <p className="text-xs text-invoice-gray-medium mb-1">Date</p>
          <p className="text-sm text-invoice-gray-dark">{date}</p>
        </div>
        <div className="text-right">
          <div className={`invoice-badge invoice-badge-${status}`}>
            {statusLabels[status]}
          </div>
        </div>
      </div>
      
      {/* Hover State */}
      <div 
        className={`absolute inset-0 bg-white rounded-xl p-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <p className="text-xs text-invoice-gray-medium mb-1">Due Date</p>
            <p className="text-sm text-invoice-gray-dark mb-4">{dueDate}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="text-sm">View Details</Button>
            <Button className="text-sm bg-invoice-blue hover:bg-invoice-blue-dark">Download</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceCard;
