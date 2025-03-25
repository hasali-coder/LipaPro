
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-lipa-gray overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-kenya-wave bg-size-200 animate-wave-pattern opacity-5 z-0"></div>
      
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lipa-gray-dark mb-6">
              Simplify Your Invoicing with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lipa-red to-lipa-green">LipaPro</span>
            </h1>
            <p className="text-lg sm:text-xl text-lipa-gray-medium mb-8 max-w-2xl mx-auto">
              Create professional invoices, track payments, and manage your business finances all in one place.
              Simple, efficient, and designed for Kenyan businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                className="bg-lipa-red hover:bg-lipa-red/90 text-white px-8 py-6 text-lg shadow-red-glow animate-slide-up"
                onClick={() => navigate('/dashboard')}
              >
                Get Started Now <ArrowRight className="ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg border-lipa-green text-lipa-green hover:bg-lipa-green-light animate-slide-up"
                style={{ animationDelay: '100ms' }}
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="mt-16 relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-lipa-gray to-transparent z-10 pointer-events-none" />
            <div className="rounded-xl overflow-hidden shadow-elevated border border-lipa-gray-light relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lipa-green via-lipa-black to-lipa-red"></div>
              <img 
                src="/placeholder.svg" 
                alt="Dashboard Preview" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
