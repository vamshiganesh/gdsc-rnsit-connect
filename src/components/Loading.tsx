
import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        <img
          src="/lovable-uploads/89a398fb-5a1a-4a61-a3ff-1f6d3f4688c1.png"
          alt="GDSC RNSIT Logo"
          className="w-32 h-32 object-contain animate-fade-in"
        />
        <Loader className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 text-gdsc-blue animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
