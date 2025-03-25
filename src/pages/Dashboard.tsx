
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { QuickStats } from '@/components/dashboard/QuickStats';
import { InvoicesList } from '@/components/dashboard/InvoicesList';

export function Dashboard() {
  return (
    <div className="min-h-screen bg-lipa-gray relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-kenya-wave bg-size-200 animate-wave-pattern opacity-5 z-0"></div>
      
      <DashboardHeader />
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-lipa-gray-dark mb-6">Quick Stats</h2>
            <QuickStats />
          </section>
          
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-lipa-gray-dark">Recent Invoices</h2>
              <button className="text-sm text-lipa-green hover:text-lipa-green/80 font-medium">
                View All
              </button>
            </div>
            <InvoicesList />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
