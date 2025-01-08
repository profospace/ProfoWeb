import React from "react";
import LocationAccessPopup from "../components/LocationAccessPopup";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import FloatButtonShowMap from '../components/FloatButtonShowMap'

function Home() {
    const { properties } = useSelector((state) => state.properties);
    const { filteredProperties } = useSelector((state) => state.properties);

    // Determine which list to render
    const propertiesToDisplay = filteredProperties?.length > 0 ? filteredProperties : properties;

    return (
        <div className="w-full h-full bg-white">
            <FiltersSection /> {/* includes filter carousal + filter Btn */}
            <div><FloatButtonShowMap/></div>
            {/* <LocationAccessPopup /> */}
            <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {propertiesToDisplay?.length > 0 ? (
                    propertiesToDisplay.map((property) => (
                        <ProductCard key={property._id} property={property} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No properties available to display.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
