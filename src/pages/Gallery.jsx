import React from 'react';
import Gallery from 'react-photo-gallery';

// Dummy data for testing with random size images
const images = [
    {
        src: 'https://via.placeholder.com/800x600',
        width: 4,
        height: 3,
        alt: 'Image 1',
    },
    {
        src: 'https://via.placeholder.com/600x800',
        width: 3,
        height: 4,
        alt: 'Image 2',
    },
    {
        src: '/assets/img1.avif',
        width: 2,
        height: 1,
        alt: 'Image 3',
    },
    {
        src: 'https://via.placeholder.com/800x800',
        width: 1,
        height: 1,
        alt: 'Image 4',
    },
    {
        src: '/assets/img2.avif',
        width: 2,
        height: 1,
        alt: 'Image 5',
    }
];

const GalleryComponent = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold mb-6 text-center">Image Gallery</h2>
            <Gallery photos={images} />
        </div>
    );
};

export default GalleryComponent;
