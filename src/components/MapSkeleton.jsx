import React from 'react';
import { Globe } from 'lucide-react';

export default function MapSkeleton() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bi-card rounded-2xl p-6 h-[500px] animate-pulse flex flex-col justify-between">
        <div className="w-48 h-6 bg-borderSubtle rounded mb-4"></div>
        <div className="w-full h-[400px] bg-bgPrimary rounded-xl flex items-center justify-center">
          <Globe className="w-8 h-8 text-textMuted animate-spin" />
        </div>
      </div>
    </div>
  );
}
