
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface MobileSidebarTriggerProps {
  setIsSidebarOpen: (value: boolean) => void;
}

export const MobileSidebarTrigger = ({ setIsSidebarOpen }: MobileSidebarTriggerProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-10 rounded-full h-12 w-12 bg-white shadow-elevated border border-lipa-gray-light"
      onClick={() => setIsSidebarOpen(true)}
    >
      <ChevronRight size={20} />
    </Button>
  );
};

export default MobileSidebarTrigger;
