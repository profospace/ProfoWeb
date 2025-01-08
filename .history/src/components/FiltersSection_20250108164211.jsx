// import React,{useState} from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { TbBeach, TbPool, TbBed, TbTree, TbHome } from "react-icons/tb";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { Button } from "@material-tailwind/react";
// import { VscSettings } from "react-icons/vsc";
// import FilterComponent from './FilterComponent';

// function FiltersSection() {
//   // popup filter
//   const [modalOpen, setModalOpen] = useState(false);

//   const NextArrow = ({ onClick }) => (
//     <div
//       className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
//       onClick={onClick}
//     >
//       <IoIosArrowForward size={24} />
//     </div>
//   );

//   const PrevArrow = ({ onClick }) => (
//     <div
//       className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-gray-700"
//       onClick={onClick}
//     >
//       <IoIosArrowBack size={24} />
//     </div>
//   );

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 8,
//     slidesToScroll: 5,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   };



//   const filterData = [
//     { icon: <TbBeach size={30} />, text: "Amazing Views" },
//     { icon: <TbPool size={30} />, text: "Pools" },
//     { icon: <TbTree size={30} />, text: "Farms" },
//     { icon: <TbHome size={30} />, text: "Lakefront" },
//     { icon: <TbBed size={30} />, text: "Rooms" },
//     { icon: <TbBeach size={30} />, text: "Amazing Views" },
//     { icon: <TbPool size={30} />, text: "Pools" },
//     { icon: <TbTree size={30} />, text: "Farms" },
//     { icon: <TbHome size={30} />, text: "Lakefront" },
//     { icon: <TbBed size={30} />, text: "Rooms" },
//   ];
//   return (
//     <div className='filters-section shadow-lg px-8 py-2 grid grid-cols-8 gap-6 items-center'>
//      <div className='col-span-7'>
//         <Slider {...settings}>
//           {filterData.map((item, index) => (
//             <div key={index} className="grid place-items-center px-2 py-2 mx-2 cursor-pointer">
//               <div className="rounded-full w-16 h-10 grid place-items-center bg-gray-100">{item.icon}</div>
//               <div className="text-sm font-medium">{item.text}</div>
//             </div>
//           ))}
//         </Slider>
//      </div>
//       <div>
//         <Button variant="gradient" className="flex items-center gap-3 px-4 py-2 text-xs" onClick={() => setModalOpen(true)}>
//           <VscSettings size={25}  />
//           Filters
//         </Button>
//       </div>
//       <div><FilterComponent modalOpen={modalOpen}  setModalOpen={setModalOpen}/></div>
//       </div>

//   )
// }

// export default FiltersSection