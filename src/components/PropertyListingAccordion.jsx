// import React, { useState, useEffect } from 'react';
// import { Home, Bed, Bath, IndianRupee } from 'lucide-react';
// import _ from 'lodash';
// import { useSelector } from 'react-redux';

// const PropertyListingAccordion = () => {
//     const [buildingData, setBuildingData] = useState(null);
//     const [selectedBHK, setSelectedBHK] = useState(null);
//     const { buildingDetail } = useSelector(state => state.buildings)

//     // const handlePropertyDetailPageNavigation

//     useEffect(() => {
//         setBuildingData(buildingDetail)
//     }, [buildingDetail]);

//     if (!buildingData) {
//         return <div className="p-4">Loading...</div>;
//     }

//     // Group properties by number of bedrooms (BHK)
//     const propertiesByBHK = _.groupBy(buildingData.connectedProperties, 'bedrooms');

//     const BHKSummaryCard = ({ bhk, properties }) => (
//         <div
//             className="mb-4 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow"
            
//         >
//             <div className="p-4 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                         <Home className="w-5 h-5" />
//                         <h3 className="text-lg font-semibold">{bhk} BHK Properties</h3>
//                     </div>
//                     <span onClick={() => setSelectedBHK(selectedBHK === bhk ? null : bhk)} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                         {properties.length} Available
//                     </span>
//                 </div>
//             </div>

//             {selectedBHK === bhk && (
//                 <div className="p-4">
//                     <div className="space-y-4">
//                         {properties.map((property) => (
//                             <div key={property._id} className="bg-gray-50 rounded-lg p-4">
//                                 <div className="flex gap-4">
//                                     <div className="w-32 h-32 flex-shrink-0">
//                                         <img
//                                             src={property.post_image || "/api/placeholder/320/320"}
//                                             alt={property.post_title}
//                                             className="w-full h-full object-cover rounded-lg"
//                                         />
//                                     </div>
//                                     <div className="flex-1 min-w-0">
//                                         <h4 className="font-semibold text-lg truncate">{property.post_title}</h4>
//                                         <p className="text-gray-600 text-sm mb-2 truncate">{property.address}</p>
//                                         <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
//                                             <div className="flex items-center gap-1">
//                                                 <Bed className="w-4 h-4" />
//                                                 {property.bedrooms} BHK
//                                             </div>
//                                             <div className="flex items-center gap-1">
//                                                 <Bath className="w-4 h-4" />
//                                                 {property.bathrooms} Baths
//                                             </div>
//                                             <div>
//                                                 {property.area} {property.areaUnit}
//                                             </div>
//                                         </div>
//                                         <div className="mt-2 flex justify-between items-center">
//                                             <div className="flex items-center gap-1">
//                                                 <IndianRupee className="w-4 h-4" />
//                                                 <span className="font-semibold">
//                                                     {property.price.toLocaleString()} {property.priceUnit}
//                                                 </span>
//                                             </div>
//                                             <div className="text-sm">
//                                                 <span className={`px-2 py-1 rounded ${property.purpose === 'Rent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
//                                                     }`}>
//                                                     {property.purpose}
//                                                 </span>
//                                             </div>
//                                         </div>
//                                         {property.furnishing && (
//                                             <div className="mt-2 text-sm text-gray-600">
//                                                 Furnishing: {property.furnishing}
//                                             </div>
//                                         )}
//                                         {property.amenities && property.amenities.length > 0 && (
//                                             <div className="mt-2">
//                                                 <div className="flex flex-wrap gap-2">
//                                                     {property.amenities.slice(0, 3).map((amenity, index) => (
//                                                         <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                                                             {amenity}
//                                                         </span>
//                                                     ))}
//                                                     {property.amenities.length > 3 && (
//                                                         <span className="text-xs bg-gray-100 px-2 py-1 rounded">
//                                                             +{property.amenities.length - 3} more
//                                                         </span>
//                                                     )}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );

//     return (
//         <div className="max-w-4xl mx-auto p-4">
//             <div className="mb-6">
//                 <h2 className="text-2xl font-bold">{buildingData.name}</h2>
//                 <p className="text-gray-600">{buildingData.description}</p>
//             </div>

//             <div className="grid grid-cols-1 gap-4">
//                 {Object.entries(propertiesByBHK).map(([bhk, properties]) => (
//                     <BHKSummaryCard
//                         key={bhk}
//                         bhk={bhk}
//                         properties={properties}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default PropertyListingAccordion;

import React, { useState, useEffect } from 'react';
import { Home, Bed, Bath, IndianRupee, Store, Building } from 'lucide-react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PropertyListing = () => {
    const [buildingData, setBuildingData] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const { buildingDetail } = useSelector(state => state.buildings)
    const navigate = useNavigate()


        useEffect(() => {
            setBuildingData(buildingDetail)
        }, [buildingDetail]);

    if (!buildingData) {
        return <div className="p-4">Loading...</div>;
    }

    // Group properties by either BHK (for apartments) or type_name (for others)
    const groupedProperties = _.groupBy(buildingData.connectedProperties, (property) => {
        if (property.type_name.toLowerCase() === 'apartment') {
            return `${property.bedrooms}bhk`;
        }
        return property.type_name;
    });

    console.log(groupedProperties)

    const getTypeIcon = (type) => {
        if (type.toLowerCase().includes('bhk')) return Home;
        if (type.toLowerCase().includes('shop')) return Store;
        return Building;
    };

    const PropertyCard = ({ property }) => (
        <div className="bg-gray-50 rounded-lg p-4 cursor-pointer " onClick={() => navigate(`/api/details/${property?.post_id}`)}>
            <div className="flex gap-4">
                <div className="w-32 h-32 flex-shrink-0">
                    <img
                        src={property.post_image || "/api/placeholder/320/320"}
                        alt={property.post_title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className='flex justify-between items-center '>
                        <h4 className="font-semibold text-lg truncate">{property.post_title}</h4>
                        <p className='px-2 py-[0.5px] text-sm rounded bg-yellow-200'>{property.floor + 'th floor'}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-2 truncate">{property.address}</p>
                    <div className="flex gap-4 text-sm text-gray-600 flex-wrap">
                        {property.type_name === 'Apartment' && (
                            <>
                                <div className="flex items-center gap-1">
                                    <Bed className="w-4 h-4" />
                                    {property.bedrooms} BHK
                                </div>
                                <div className="flex items-center gap-1">
                                    <Bath className="w-4 h-4" />
                                    {property.bathrooms} Baths
                                </div>
                            </>
                        )}
                        <div>
                            {property.area} {property.areaUnit}
                        </div>
                        {property.furnishing && (
                            <div>{property.furnishing}</div>
                        )}
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center gap-1">
                            <IndianRupee className="w-4 h-4" />
                            <span className="font-semibold">
                                {property.price.toLocaleString()} {property.priceUnit}
                                {property.purpose.toLowerCase() === 'rent' && '/month'}
                            </span>
                        </div>
                        <div className="text-sm">
                            <span className={`px-2 py-1 rounded ${property.purpose.toLowerCase() === 'rent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                                }`}>
                                {property.purpose}
                            </span>
                        </div>
                    </div>
                    {property.amenities && property.amenities.length > 0 && (
                        <div className="mt-2">
                            <div className="flex flex-wrap gap-2">
                                {property.amenities.slice(0, 3).map((amenity, index) => (
                                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        {amenity}
                                    </span>
                                ))}
                                {property.amenities.length > 3 && (
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                        +{property.amenities.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">{buildingData.name}</h2>
                <p className="text-gray-600">{buildingData.description}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Total Properties:</span> {buildingData.totalProperties}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Available:</span> {buildingData.freeProperties}
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="font-semibold">Total Floors:</span> {buildingData.totalFloors}
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {Object.entries(groupedProperties).map(([type, properties]) => {
                    const Icon = getTypeIcon(type);
                    const displayType = type.toLowerCase().includes('bhk')
                        ? type.toUpperCase()
                        : type;

                    return (
                        <div key={type} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                            <div
                                className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => setSelectedType(selectedType === type ? null : type)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Icon className="w-5 h-5" />
                                        <h3 className="text-lg font-semibold">{displayType}</h3>
                                    </div>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        {properties.length} Available
                                    </span>
                                </div>
                            </div>

                            {selectedType === type && (
                                <div className="p-4">
                                    <div className="space-y-4">
                                        {properties.map((property) => (
                                            <PropertyCard key={property._id} property={property} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PropertyListing;