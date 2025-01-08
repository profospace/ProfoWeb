import React, { useState } from "react";
import { TbMap } from "react-icons/tb";

function FloatButtonShowMap() {
    const [showMap, setShowMap] = useState(false);

    const toggleMap = () => {
        setShowMap((prev) => !prev);
    };

    return (
        <>
            {/* Button */}
            <button
                onClick={toggleMap}
                className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer"
            >
                <TbMap size={20} />
                <span className="ml-2">{showMap ? "Hide Map" : "Show Map"}</span>
            </button>

            {/* Sliding Map Container */}
            <div
                className={`fixed bottom-0 left-0 w-full h-3/4 bg-white shadow-lg z-40 transition-transform duration-300 ${showMap ? "translate-y-0" : "translate-y-full"
                    }`}
            >
                {/* Close Button */}
                <button
                    onClick={toggleMap}
                    className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg cursor-pointer"
                >
                    Close
                </button>

                {/* Map Content */}
                <div className="w-full h-full flex items-center justify-center">
                    <p>Map will be displayed here.</p>
                </div>
            </div>
        </>
    );
}

export default FloatButtonShowMap;
