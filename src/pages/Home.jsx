import React from "react";
import FiltersSection from "../components/FiltersSection";
import PopupLocation from "../components/PopupLocation";
import LocationAccessPopup from "../components/LocationAccessPopup";

function Home() {


    return (
        <div className="w-full h-screen shadow-md bg-white">
            <FiltersSection />
            <LocationAccessPopup />
        </div>
    );
}

export default Home;
