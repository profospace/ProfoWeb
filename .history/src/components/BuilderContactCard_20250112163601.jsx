import React from 'react';
import { Heart } from 'lucide-react';

const BuilderContactCard = ({ propertyDetail }) => {
    // Format price to include spaces between thousands
    const formatPrice = (price) => {
        return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl border-1 py-6 px-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-2 md:space-y-0">
                <div>
                    <h1 className="text-lg font-semibold">GC Osnova</h1>
                    <p className="text-gray-500">Advertising</p>
                </div>
                <img
                    src="/api/placeholder/120/40"
                    alt="Osnova Logo"
                    className="h-10"
                />
            </div>

            {/* Contact Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold">+7 938 988-01-25</p>
                </div>
                <div className="flex items-center space-x-2">
                    <img
                        src="/api/placeholder/100/100"
                        alt="QR Code"
                        className="w-16 h-16"
                    />
                    <p className="text-gray-600 text-sm">
                        Point your phone camera<br />
                        at the code to quickly dial<br />
                        the number
                    </p>
                </div>
                <p className="text-gray-600">Open until 22:30</p>
            </div>

            {/* Property Card */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                {/* Left side - Property Image */}
                <div className="w-full md:w-1/3">
                    <img
                        src={propertyDetail?.post_image || "/api/placeholder/300/400"}
                        alt="Property"
                        className="w-full h-[400px] object-cover rounded-lg"
                    />
                </div>

                {/* Middle - Floor Plan */}
                <div className="w-full md:w-1/4">
                    <img
                        src={propertyDetail?.floor_plan_image || "/api/placeholder/200/400"}
                        alt="Floor Plan"
                        className="w-full h-[400px] object-contain"
                    />
                </div>

                {/* Right side - Property Details */}
                <div className="w-full md:w-5/12 relative">
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold mb-4">
                            {formatPrice(propertyDetail?.price)} ₹
                        </h2>
                        <Heart className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors" />
                    </div>

                    <div className="space-y-2">
                        <p className="text-lg">
                            {propertyDetail?.area} m², {propertyDetail?.type_name},
                            {propertyDetail?.status === "listed" ? "new building" : propertyDetail?.status}
                        </p>
                        <p className="text-blue-600 font-semibold">
                            {propertyDetail?.post_title}
                        </p>
                        <p className="text-gray-700">{propertyDetail?.address}</p>
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-red-500 rounded-full" />
                            <p className="text-gray-600">{propertyDetail?.locality} {propertyDetail?.possession === "Immediate" ? "1 min walk" : propertyDetail?.possession}</p>
                        </div>
                    </div>

                    <div className="mt-4 py-2 px-4 bg-yellow-50 rounded-lg inline-block">
                        <p className="text-gray-700">Never transfer prepayment</p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {propertyDetail?.facilities?.map((facility, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                            >
                                {facility}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuilderContactCard;