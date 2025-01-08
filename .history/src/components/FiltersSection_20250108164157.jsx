import React, { useState } from 'react';
import {
  Mountain,
  Waves,
  Building,
  Trees,
  Home,
  Settings,
} from 'lucide-react';

const FiltersSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const filterData = [
    { icon: <Mountain className="w-6 h-6" />, text: "Amazing Views" },
    { icon: <Waves className="w-6 h-6" />, text: "Pools" },
    { icon: <Trees className="w-6 h-6" />, text: "Farms" },
    { icon: <Building className="w-6 h-6" />, text: "Lakefront" },
    { icon: <Home className="w-6 h-6" />, text: "Rooms" },
    { icon: <Mountain className="w-6 h-6" />, text: "Amazing Views" },
    { icon: <Waves className="w-6 h-6" />, text: "Pools" },
    { icon: <Trees className="w-6 h-6" />, text: "Farms" },
    { icon: <Building className="w-6 h-6" />, text: "Lakefront" },
    { icon: <Home className="w-6 h-6" />, text: "Rooms" },
  ];

  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Scrollable Filter Section */}
            <div className="flex-1 overflow-x-auto hide-scrollbar">
              <div className="flex space-x-6 md:space-x-8">
                {filterData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center min-w-fit cursor-pointer group"
                  >
                    <div className="p-4 rounded-full bg-gray-50 transition-all duration-200 group-hover:bg-gray-100 group-hover:shadow-md">
                      {item.icon}
                    </div>
                    <span className="mt-2 text-xs font-medium text-gray-600 whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 min-w-fit"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FiltersSection;