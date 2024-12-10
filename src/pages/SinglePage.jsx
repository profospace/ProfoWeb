import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@material-tailwind/react";
import "swiper/css";
import { PiDotsNineBold } from "react-icons/pi";
import { CarouselImages } from "../components/CarousalImages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProperty } from "../redux/features/Properties/propertiesSlice";

const SinglePage = () => {
    const { post_id } = useParams()
    const dispatch = useDispatch()
    const { propertyDetail } = useSelector(state => state.properties)
    const [images , setImages] = useState([])
    console.log(propertyDetail)

    // Fetch property details
    useEffect(() => {
        dispatch(getSingleProperty(post_id));
    }, [post_id, dispatch]);

    // Collect all images when propertyDetail changes
    useEffect(() => {
        if (propertyDetail) {
            const collectedImages = [];

            if (propertyDetail.post_image) {
                collectedImages.push(propertyDetail.post_image);
            }

            if (propertyDetail.floor_plan_image) {
                collectedImages.push(propertyDetail.floor_plan_image);
            }

            if (Array.isArray(propertyDetail.galleryList)) {
                collectedImages.push(...propertyDetail.galleryList);
            }

            setImages(collectedImages);
        }
    }, [propertyDetail]);


    return (
        <div className="container mx-auto px-4">
            {/* Title */}
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 capitalize">
                    {propertyDetail?.post_title}
                </h1>
            </div>

            {/* Desktop Grid */}
            {/* <div className="hidden lg:grid grid-cols-2 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                        <img
                            src={src}
                            alt={`Gallery ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div> */}


            <div className="relative">
                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-2 gap-4 items-center ">
                    {/* Full Height Box on the Left */}
                    <div className="bg-gray-200 flex items-center justify-center text-2xl font-bold rounded-lg shadow-md h-full">
                        <CarouselImages />  {/* Set of images for carousal */}
                    </div>

                    {/* 2x2 Grid on the Right */}
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="bg-blue-200 flex items-center justify-center rounded-lg shadow-md h-40">
                            Box 1
                        </div>
                        <div className="bg-green-200 flex items-center justify-center rounded-lg shadow-md h-40">
                            Box 2
                        </div>
                        <div className="bg-yellow-200 flex items-center justify-center rounded-lg shadow-md h-40">
                            Box 3
                        </div>
                        <div className="bg-red-200 flex items-center justify-center rounded-lg shadow-md h-40">
                            Box 4
                        </div>
                    </div>

                </div>

                {/* Mobile Carousel */}
                <div className="lg:hidden">
                    <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
                        {images.map((src, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src={src}
                                        alt={`Gallery ${index}`}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* This button will navigate to gallery */}
                <Button
                    variant="outlined"
                    className="flex items-center gap-3 absolute bottom-5 right-5 px-3 py-2 bg-white shadow-lg z-10"
                >
                    <PiDotsNineBold size={25} />
                    Show all photos
                </Button>
            </div>

            {/* Details Section */}
            <div className="mt-8 p-4 border rounded-lg shadow-sm bg-white">
                <h2 className="text-lg font-semibold text-gray-700">
                    Entire rental unit in Gurugram, India
                </h2>
                <p className="text-gray-600 mt-2">
                    2 guests · 1 bedroom · 1 bed · 1 bathroom
                </p>
                <p className="text-gray-800 font-bold mt-4 text-xl">₹3,570 / night</p>
            </div>
        </div>
    );
};

export default SinglePage;
