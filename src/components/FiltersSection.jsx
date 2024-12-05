import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbBeach, TbPool, TbBed, TbTree, TbHome } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function FiltersSection() {
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
      onClick={onClick}
    >
      <IoIosArrowForward size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
      onClick={onClick}
    >
      <IoIosArrowBack size={24} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };



  const filterData = [
    { icon: <TbBeach size={30} />, text: "Amazing Views" },
    { icon: <TbPool size={30} />, text: "Pools" },
    { icon: <TbTree size={30} />, text: "Farms" },
    { icon: <TbHome size={30} />, text: "Lakefront" },
    { icon: <TbBed size={30} />, text: "Rooms" },
    { icon: <TbBeach size={30} />, text: "Amazing Views" },
    { icon: <TbPool size={30} />, text: "Pools" },
    { icon: <TbTree size={30} />, text: "Farms" },
    { icon: <TbHome size={30} />, text: "Lakefront" },
    { icon: <TbBed size={30} />, text: "Rooms" },
  ];
  return (
      <Slider {...settings}>
        {filterData.map((item, index) => (
          <div key={index} className="grid place-items-center">
            <div className="rounded-full bg-gray-100">{item.icon}</div>
            <div className="text-sm font-medium">{item.text}</div>
          </div>
        ))}
      </Slider>

  )
}

export default FiltersSection