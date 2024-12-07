import React from "react";
import PopupLocation from "../components/PopupLocation";
import LocationAccessPopup from "../components/LocationAccessPopup";
import ProductCard from "../components/ProductCard";

const dummyProducts = [
    {
        id: 1,
        title: "Wireless Headphones",
        description: "Experience high-quality sound with our latest wireless headphones.",
        images: [
            "https://via.placeholder.com/300x200?text=Headphone+1",
            "https://via.placeholder.com/300x200?text=Headphone+2",
            "https://via.placeholder.com/300x200?text=Headphone+3",
        ],
    },
    {
        id: 2,
        title: "Smartphone",
        description: "Latest smartphone with powerful features and sleek design.",
        images: [
            "https://via.placeholder.com/300x200?text=Phone+1",
            "https://via.placeholder.com/300x200?text=Phone+2",
            "https://via.placeholder.com/300x200?text=Phone+3",
        ],
    },
    {
        id: 3,
        title: "Sports Shoes",
        description: "Comfortable and stylish sports shoes for all activities.",
        images: [
            "https://via.placeholder.com/300x200?text=Shoes+1",
            "https://via.placeholder.com/300x200?text=Shoes+2",
            "https://via.placeholder.com/300x200?text=Shoes+3",
        ],
    },
    {
        id: 4,
        title: "Sports Shoes",
        description: "Comfortable and stylish sports shoes for all activities.",
        images: [
            "https://via.placeholder.com/300x200?text=Shoes+1",
            "https://via.placeholder.com/300x200?text=Shoes+2",
            "https://via.placeholder.com/300x200?text=Shoes+3",
            "https://via.placeholder.com/300x200?text=Shoes+4",
        ],
    },
];


function Home() {
    return (
        <div className="w-full h-full bg-white">
            
            <LocationAccessPopup />
            {/* <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
                {dummyProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div> */}
            <div className="grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {dummyProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
}

export default Home;
