import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProductCard = ({ product }) => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.activeIndex);
    };

    useEffect(() => {
        if (swiperInstance && currentIndex !== swiperInstance.activeIndex) {
            swiperInstance.slideTo(currentIndex); // Sync swiper with the current index
        }
    }, [currentIndex, swiperInstance]);

    return (
        <div className="bg-white shadow-lg rounded-md p-2 max-w-[18rem] mx-auto group relative">
            <Swiper
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                onSlideChange={handleSlideChange}
                onSwiper={setSwiperInstance}
                modules={[Navigation, Pagination]}
                className="relative"
            >
                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            alt={`Product ${index}`}
                            className="rounded-md w-full min-h-60 object-cover"
                        />
                    </SwiperSlide>
                ))}
                {/* Back Arrow Button */}
                {currentIndex > 0 && (
                    <button
                        className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow opacity-0 group-hover:opacity-100"
                        onClick={() => swiperInstance?.slidePrev()}
                    >
                        <IoIosArrowBack />
                    </button>
                )}
                {/* Forward Arrow Button */}
                {currentIndex < product.images.length - 1 && (
                    <button
                        className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-[rgba(0,0,0,0.1)] text-black hover:bg-white hover:scale-110 duration-150 ease-in-out p-1 rounded-full shadow opacity-0 group-hover:opacity-100"
                        onClick={() => swiperInstance?.slideNext()}
                    >
                        <IoIosArrowForward />
                    </button>
                )}
            </Swiper>
            <div className="mt-4 py-2 px-1">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <h5 className="font-bold">{product.title}</h5>
                <p className="text-gray-600 text-sm">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductCard;
