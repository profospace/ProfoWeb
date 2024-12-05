import React from 'react';
import { TbMap } from 'react-icons/tb';

function FloatButtonShowMap() {
    return (
        <button
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center bg-black text-white px-6 py-3 rounded-full text-sm shadow-lg cursor-pointer"
        >
            <TbMap size={20} />
            <span className="ml-2">Show Map</span>
        </button>
    );
}

export default FloatButtonShowMap;
