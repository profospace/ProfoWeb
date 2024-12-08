import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Badge, Tag, Card, Space } from 'antd';
import { FaLocationDot } from "react-icons/fa6";

// const ProductCard = ({ product }) => {
//     const [swiperInstance, setSwiperInstance] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleSlideChange = (swiper) => {
//         setCurrentIndex(swiper.activeIndex);
//     };

//     useEffect(() => {
//         if (swiperInstance && currentIndex !== swiperInstance.activeIndex) {
//             swiperInstance.slideTo(currentIndex); // Sync swiper with the current index
//         }
//     }, [currentIndex, swiperInstance]);

//     return (
//         <div className="bg-white shadow-lg rounded-md p-2 max-w-[18rem] mx-auto group relative">
//             <Swiper
//                 pagination={{ clickable: true }}
//                 navigation={{
//                     nextEl: ".custom-next",
//                     prevEl: ".custom-prev",
//                 }}
//                 onSlideChange={handleSlideChange}
//                 onSwiper={setSwiperInstance}
//                 modules={[Navigation, Pagination]}
//                 className="relative"
//             >
//                 {product.images.map((image, index) => (
//                     <SwiperSlide key={index}>
//                         <img
//                             src={image}
//                             alt={`Product ${index}`}
//                             className="rounded-md w-full min-h-60 object-cover"
//                         />
//                     </SwiperSlide>
//                 ))}
//                 {/* Back Arrow Button */}
//                 {currentIndex > 0 && (
//                     <button
//                         className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow opacity-0 group-hover:opacity-100"
//                         onClick={() => swiperInstance?.slidePrev()}
//                     >
//                         <IoIosArrowBack />
//                     </button>
//                 )}
//                 {/* Forward Arrow Button */}
//                 {currentIndex < product.images.length - 1 && (
//                     <button
//                         className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow opacity-0 group-hover:opacity-100"
//                         onClick={() => swiperInstance?.slideNext()}
//                     >
//                         <IoIosArrowForward />
//                     </button>
//                 )}
//             </Swiper>
//             <div className="mt-4 py-2 px-1">
//                 <h3 className="text-lg font-bold">{product.title}</h3>
//                 <p className="text-gray-600 text-sm">{product.description}</p>
//                 <h5 className="font-bold">{product.title}</h5>
//                 <p className="text-gray-600 text-sm">{product.description}</p>
//             </div>
//         </div>
//     );
// };

const ProductCard = ({ property }) => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    };

    /* Redirect to the google map on location Marker Click */
    const handleLocationClick = (latitude,longitude) => {
        if (navigator.geolocation) {
            // Get the user's current position
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Redirect to Google Maps with the user's current location
                const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
                window.open(googleMapsURL, '_blank');  // Opens the link in a new tab
            }, (error) => {
                console.error("Error getting location:", error);
                alert("Unable to retrieve your location. Please enable location services.");
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }

    useEffect(() => {
        if (swiperInstance && currentIndex !== swiperInstance.activeIndex) {
            swiperInstance.slideTo(currentIndex);
        }
    }, [currentIndex, swiperInstance]);

    return (
        <div className="bg-white shadow-lg rounded-md p-2 mx-auto group relative w-72 sm:max-w-[20rem] md:max-w-[22rem] lg:max-w-[18rem] border-slate-200 hover:border-slate-300 hover:shadow-md  cursor-pointer">

            <div className="">
                {/* Conditional Badge Ribbon */}
                {property?.verified && (
                    <Badge.Ribbon
                        text="Verified"
                        color="green"
                        className="z-10"
                    />
                )}

                <div className="relative">
                    {/* Tag for Property Purpose */}
                    <div className="flex items-center absolute bottom-0 right-0 z-10">
                        <div>{property?.purpose && (
                            <Tag
                                color="blue"
                                className=""
                            >
                                {property?.purpose}
                            </Tag>
                        )}</div>


                        <div className="cursor-pointer"
                            onClick={() => handleLocationClick(property?.latitude, property?.longitude)}>
                            <FaLocationDot size={24} className="text-blue-500" />
                        </div>
                    </div>
                    {/* Swiper Gallery */}
                    <Swiper
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        onSlideChange={handleSlideChange}
                        onSwiper={setSwiperInstance}
                        modules={[Navigation, Pagination]}
                        className="relative z-0"
                    >
                        {property?.galleryList?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Product ${index}`}
                                    className="rounded-md w-full min-h-60 max-h-60 min-w-60 object-contain"
                                />
                            </SwiperSlide>
                        ))}
                        {/* previous btn */}
                        {currentIndex > 0 && (
                            <button
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black group-hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow opacity-0 group-hover:opacity-100 z-10"
                                onClick={() => swiperInstance?.slidePrev()}
                            >
                                <IoIosArrowBack />
                            </button>
                        )}
                        {/* next btn */}
                        {currentIndex < property?.galleryList?.length - 1 && (
                            <button
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black group-hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow opacity-0 group-hover:opacity-100 z-10"
                                onClick={() => swiperInstance?.slideNext()}
                            >
                                <IoIosArrowForward />
                            </button>
                        )}
                    </Swiper>
                </div>
            </div>
            <div className="mt-4 py-2 px-1">
                <h3 className="text-lg font-bold">{property?.post_title}</h3>
                <p className="text-gray-600 text-sm">{property?.address}</p>
            </div>
        </div>
    );
};

export default ProductCard;
