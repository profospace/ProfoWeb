import React from "react";
const images = [
    "/assets/img1.avif", // Landscape
    "/assets/img2.avif", // Landscape
    "/assets/img3.avif", // Landscape
    "https://via.placeholder.com/600x800", // Portrait
    "https://via.placeholder.com/1200x500", // Wide
    "https://via.placeholder.com/400x400", // Square
    "https://via.placeholder.com/700x1000", // Portrait
    "https://via.placeholder.com/1000x700", // Landscape
    "https://via.placeholder.com/800x800", // Square
    "https://via.placeholder.com/500x1200", // Tall
    "https://via.placeholder.com/1200x800", // Landscape
    "https://via.placeholder.com/900x600", // Landscape
];

const Gallery = () => {
    return (
        <div className="container mx-auto p-4">
            <div
                className="flex gap-10 flex-wrap"
                style={{ gridAutoRows: "200px" }} // Adjust for auto-resized rows
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md"
                    >
                        <img
                            src={image}
                            alt={`Gallery Image ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
