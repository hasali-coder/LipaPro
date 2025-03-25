import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { QuickStats } from "@/components/dashboard/QuickStats";

export function Dashboard() {
  // Fetch invoices from Supabase using React Query v5 syntax
  const { data: invoices, error, isPending } = useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      const { data, error } = await supabase.from("invoices").select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  });

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

          {/* Remove the entire 'Recent Invoices' section */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
