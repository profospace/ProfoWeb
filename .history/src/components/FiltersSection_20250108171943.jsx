import React, { useEffect, useState } from 'react';
import {
  Building,
  Home as FallbackIcon,
  Settings,
} from 'lucide-react';
import FilterComponent from './FilterComponent';
import { useSelector } from 'react-redux';

const typeNameIconMap = {
  "warehouses": <Building size={25} />,
  "shops": <Building size={25} />,
  "apartment": <Building size={25} />,
  "commercial": <Building size={25} />,
  "house": <Building size={25} />,
  "villa": <Building size={25} />,
};

const FiltersSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const { properties } = useSelector((state) => state.properties);

  useEffect(() => {
    if (properties) {
      const allPropertyTypes = properties
        .map(property => property.type_name)
        .filter(type => type)
        .map(propertyType => propertyType.toLowerCase());
      const uniquePropertyTypes = [...new Set(allPropertyTypes)];
      setUniqueTypes(uniquePropertyTypes);
    }
  }, [properties]);

  const getIconForType = (type) => {
    return typeNameIconMap[type] || <FallbackIcon size={25} />;
  };

  const formatTypeName = (type) => {
    return type
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Scrollable Filter Section */}
            <div className="flex-1 overflow-x-auto hide-scrollbar">
              <div className="flex space-x-6 md:space-x-8">
                {uniqueTypes.map((type, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center min-w-fit cursor-pointer group"
                  >
                    <div className="p-4 rounded-full bg-gray-50 transition-all duration-200 group-hover:bg-gray-100 group-hover:shadow-md">
                      {getIconForType(type)}
                    </div>
                    <span className="mt-2 text-xs font-medium text-gray-600 whitespace-nowrap">
                      {formatTypeName(type)}
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
              <Settings className="w-5 h-5" />
              <span className="hidden sm:inline">
                Filters
                <FilterComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
              </span>
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