
import { InvoiceCard, InvoiceProps } from './InvoiceCard';

const recentInvoices: InvoiceProps[] = [
  {
    id: 'INV-2024-001',
    client: 'Acme Corp',
    amount: '$2,450.00',
    date: 'Mar 1, 2024',
    dueDate: 'Mar 15, 2024',
    status: 'pending',
    delay: 1
  },
  {
    id: 'INV-2024-002',
    client: 'Tech Solutions Ltd',
    amount: '$1,850.00',
    date: 'Feb 28, 2024',
    dueDate: 'Mar 14, 2024',
    status: 'paid',
    delay: 2
  },
  {
    id: 'INV-2024-003',
    client: 'Global Industries',
    amount: '$3,200.00',
    date: 'Feb 25, 2024',
    dueDate: 'Mar 11, 2024',
    status: 'overdue',
    delay: 3
  },
  {
    id: 'INV-2024-004',
    client: 'Startup Hub Inc',
    amount: '$950.00',
    date: 'Feb 23, 2024',
    dueDate: 'Mar 9, 2024',
    status: 'draft',
    delay: 4
  }
];

export function InvoicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {recentInvoices.map((invoice) => (
        <InvoiceCard key={invoice.id} {...invoice} />
      ))}
    </div>
  );
}

export default InvoicesList;
