import React, { useEffect } from "react";
import PopupLocation from "../components/PopupLocation";
import LocationAccessPopup from "../components/LocationAccessPopup";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../redux/features/Properties/propertiesSlice";

function Home() {
    const {properties} = useSelector(state=>state.properties)
    console.log(properties)

    return (
        <div className="w-full h-full bg-white">
            
            <LocationAccessPopup />
            {/* <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
                {dummyProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div> */}
            <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {properties?.map((property) => (
                    <ProductCard key={property._id} property={property} />
                ))}
            </div>

        </div>
    );
}

export default Home;
