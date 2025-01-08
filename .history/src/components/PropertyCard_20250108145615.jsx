import React from 'react';
import { Heart, Mail } from 'lucide-react';

const PropertyCard = ({ property }) => {
    console.log(property)
    return (
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Property Image */}
            <div className="relative h-[240px] overflow-hidden">
                <img
                    src={property.gallery[0] || '/assets/testing.avif'}
                    alt={property.address || 'Swaroop Nagar, Kanpur, Uttar Pradesh'}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                        New - {property.timePosted || '8 hours ago'}
                    </span>
                </div>
                <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Property Details */}
            <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Condo for sale</span>
                </div>

                <div className="mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">${property.price}</h3>
                </div>

                <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900">{property.bedrooms || '2'}</span>
                        <span className="text-gray-600">bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900">{property.bathrooms || '3'}</span>
                        <span className="text-gray-600">bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900">{property.floor || '3'}</span>
                        <span className="text-gray-600">floor</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-bold text-gray-900">{property.area|| '2500'}</span>
                        <span className="text-gray-600">{property.areaUnit || 'sqft'}</span>
                    </div>
                </div>

                <div className="mb-4">
                    <p className="text-gray-700">{property.address || 'Swaroop Nagar, Kanpur, Uttar Pradesh'}</p>
                </div>

                <button className="w-full py-2.5 px-4 border-2 border-gray-900 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Agent
                </button>
            </div>
        </div>
    );
}

export default PropertyCard