
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, FileText, CalendarClock } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  delay: number;
}

const StatCard = ({ title, value, change, icon, delay }: StatCardProps) => {
  return (
    <div 
      className="glass-card flex flex-col h-full"
      style={{ 
        animationDelay: `${delay * 100}ms`,
        animation: 'slideUp 0.5s ease-out forwards',
        opacity: 0
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-lg bg-invoice-blue-light">
          {icon}
        </div>
        <span className={`flex items-center text-sm font-medium ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {change.value}
        </span>
      </div>
      <h3 className="text-sm text-invoice-gray-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-invoice-gray-dark">{value}</p>
    </div>
  );
};

export function QuickStats() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,780.00',
      change: { value: '12%', isPositive: true },
      icon: <DollarSign size={20} className="text-invoice-blue" />,
      delay: 1
    },
    {
      title: 'Active Clients',
      value: '36',
      change: { value: '8%', isPositive: true },
      icon: <Users size={20} className="text-invoice-blue" />,
      delay: 2
    },
    {
      title: 'Pending Invoices',
      value: '12',
      change: { value: '2%', isPositive: false },
      icon: <FileText size={20} className="text-invoice-blue" />,
      delay: 3
    },
    {
      title: 'Overdue Invoices',
      value: '5',
      change: { value: '3%', isPositive: false },
      icon: <CalendarClock size={20} className="text-invoice-blue" />,
      delay: 4
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

export default QuickStats;
