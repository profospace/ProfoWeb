import React, { useEffect } from 'react'
import { Heart, Camera } from 'lucide-react';
import EMICalculator from '../components/EMIcalculator';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleBuilding } from '../redux/features/Buildings/buildingsSlice';
import PropertyCard from '../components/PropertyCard';
import PropertyListing from '../components/PropertyListingAccordion';
import RealEstateListing from '../components/RealEstateListing';
import BuildingContactCard from '../components/BuildingContactCard';
import BuildingLCDParameters from '../components/BuildingLCDParameters';

function BuildingDetailPage() {
    // Mock data - in real app would come from props
    const building = {
        name: "Residential complex \"Eco Bunino\"",
        rating: 4.7,
        priceRange: {
            min: "5 654 985",
            max: "20 935 632",
        },
        pricePerMeter: {
            min: "160.54",
            max: "466.49"
        },
        location: "Alder",
        transportTime: "21",
        totalRatings: 3670,
        photos: 26
    };

    const { buildingId } = useParams();
    const dispatch = useDispatch();
    const { buildingDetail } = useSelector(state => state.buildings)

    console.log(buildingDetail)

    // // Extract unique BHK values
    // const uniqueBHK = [
    //     ...new Set(buildingDetail?.connectedProperties?.map((property) => property.bedrooms)),
    // ];

    // console.log(uniqueBHK)

    useEffect(() => {
        dispatch(getSingleBuilding(buildingId));
    }, [buildingId, dispatch]);

    return (
        // <div>
        //     {/* Header Section */}
        //       <div
        //           className="relative w-full h-[600px] text-white"
        //           style={{
        //               backgroundImage: `url('https://avatars.mds.yandex.net/get-verba/1030388/2a000001938ce9be0abf7ab6887cda1e8512/realty_special_photo_2100')`,
        //               backgroundSize: 'cover',
        //               backgroundPosition: 'center',
        //           }}
        //       >
        //           {/* Background Image */}
        //           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />

        //           {/* Content Container */}
        //           <div className="relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto">
        //               {/* Top Navigation */}
        //               <div className="absolute top-4 left-6 text-sm">
        //                   <nav className="flex items-center space-x-2 opacity-80">
        //                       <span>Real estate in Moscow and Moscow region</span>
        //                       <span>•</span>
        //                       <span>Buy</span>
        //                       <span>•</span>
        //                       <span>Apartment in a new building</span>
        //                       <span>•</span>
        //                       <span>{building.name}</span>
        //                   </nav>
        //               </div>

        //               {/* Status Tags */}
        //               <div className="flex gap-2 mb-4">
        //                   <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
        //                       under construction
        //                   </span>
        //                   <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
        //                       comfort
        //                   </span>
        //               </div>

        //               {/* Building Title */}
        //               <div className="flex items-center gap-2 mb-3">
        //                   <h1 className="text-4xl font-bold">{building.name}</h1>
        //                   <div className="flex items-center">
        //                       <span className="text-yellow-400 text-2xl">⭐</span>
        //                       <span className="text-2xl ml-1">{building.rating}</span>
        //                   </div>
        //               </div>

        //               {/* Price Range */}
        //               <div className="mb-3">
        //                   <div className="text-2xl font-bold">
        //                       {building.priceRange.min} — {building.priceRange.max} ₽
        //                   </div>
        //                   <div className="text-sm opacity-80">
        //                       {building.pricePerMeter.min} - {building.pricePerMeter.max} thousand rubles per m²
        //                   </div>
        //               </div>

        //               {/* Location */}
        //               <div className="flex items-center gap-2 mb-6">
        //                   <span className="text-red-500">M</span>
        //                   <span>{building.location}, {building.transportTime} min. by transport</span>
        //               </div>

        //               {/* Action Buttons */}
        //               <div className="flex gap-4 mb-6">
        //                   <button className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors">
        //                       Developer contacts
        //                   </button>
        //                   <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
        //                       Callback
        //                   </button>
        //                   <button className="p-3 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors">
        //                       <Heart className="w-6 h-6" />
        //                   </button>
        //               </div>

        //               {/* Photo Count */}
        //               <button className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit">
        //                   <Camera className="w-5 h-5" />
        //                   <span>{building.photos} photos</span>
        //               </button>

        //               {/* Developer Info */}
        //               <div className="flex items-center gap-4 my-8 pb-4">
        //                   <div className="font-bold text-xl">самолет</div>
        //                   <div className="text-sm">developer #1</div>
        //                   <div className="flex items-center gap-2">
        //                       <span className="text-yellow-400">⭐</span>
        //                       <span>{building.rating}</span>
        //                       <span className="opacity-80">• {building.totalRatings} ratings</span>
        //                   </div>
        //               </div>

        //               {/* Navigation Tabs */}
        //               <div
        //                   className="absolute bottom-0 left-0 w-full flex gap-6 text-md mt-4 backdrop-blur-lg p-5"
        //               >
        //                   {[
        //                       'Mortgage',
        //                       'Apartments',
        //                       'Discounts and promotions',
        //                       'Description',
        //                       'Infrastructure',
        //                       'Construction progress',
        //                   ].map((tab) => (
        //                       <button key={tab} className="hover:text-red-800 transition-colors">
        //                           {tab}
        //                       </button>
        //                   ))}
        //               </div>

        //           </div>
        //       </div>


        //     {/* floor details */}
        //       {/* <div className="px-12 py-6 flex">
        //           <div className="bg-[#F5CA20] rounded-lg px-6 py-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
        //               <h1 className="text-xl font-bold text-gray-800">Floor {buildingDetail?.totalFloors}</h1>
        //               <div className="flex gap-3 mt-3">
        //               {
        //                       uniqueBHK?.length > 0 && uniqueBHK?.map((bhk, index) => {
        //                         if (bhk !== null){
        //                             return <p key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm">
        //                                 {bhk} BHK
        //                             </p>
        //                         }
        //                       })
        //               }


        //               </div>
        //               <div className='mt-3 flex justify-between items-center gap-1'>
        //                   <div className="text-blue-800 font-medium">
        //                       {buildingDetail?.connectedProperties?.length} {buildingDetail?.connectedProperties?.length > 0 ? "Property" : "Properties"} Available
        //                   </div>
        //                   <div>
        //                       <IoIosArrowRoundForward size={30}/>
        //                   </div>
        //               </div>
        //           </div>
        //       </div>

        //       <div className='grid grid-cols-3 px-12 gap-6'>
        //         {
        //               buildingDetail?.connectedProperties?.length > 0 && buildingDetail?.connectedProperties?.map((property) => <PropertyCard key={property?._id} property={property} />)
        //         }
        //       </div> */}


        //       <PropertyListing/>


        //       <RealEstateListing />

        //     {/* EMI Calculator component */}
        //       <EMICalculator />
        // </div>

        //   <div>
        //       {/* Header Section */}
        //       <div
        //           className="relative w-full h-[600px] text-white"
        //           style={{
        //               backgroundImage: `url('https://avatars.mds.yandex.net/get-verba/1030388/2a000001938ce9be0abf7ab6887cda1e8512/realty_special_photo_2100')`,
        //               backgroundSize: 'cover',
        //               backgroundPosition: 'center',
        //           }}
        //       >
        //           {/* Background Overlay */}
        //           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />

        //           {/* Content Container */}
        //           <div className="relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto">
        //               {/* Top Navigation */}
        //               <nav className="absolute top-4 left-6 text-sm flex flex-wrap items-center gap-2 opacity-80">
        //                   <span>Real estate in Moscow and Moscow region</span>
        //                   <span>•</span>
        //                   <span>Buy</span>
        //                   <span>•</span>
        //                   <span>Apartment in a new building</span>
        //                   <span>•</span>
        //                   <span>{building.name}</span>
        //               </nav>

        //               {/* Status Tags */}
        //               <div className="flex gap-2 mb-4 flex-wrap">
        //                   <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
        //                       under construction
        //                   </span>
        //                   <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
        //                       comfort
        //                   </span>
        //               </div>

        //               {/* Building Title */}
        //               <div className="flex items-center gap-2 mb-3 flex-wrap">
        //                   <h1 className="text-4xl sm:text-3xl font-bold">{building.name}</h1>
        //                   <div className="flex items-center">
        //                       <span className="text-yellow-400 text-2xl">⭐</span>
        //                       <span className="text-2xl ml-1">{building.rating}</span>
        //                   </div>
        //               </div>

        //               {/* Price Range */}
        //               <div className="mb-3">
        //                   <div className="text-2xl font-bold">
        //                       {building.priceRange.min} — {building.priceRange.max} ₽
        //                   </div>
        //                   <div className="text-sm opacity-80">
        //                       {building.pricePerMeter.min} - {building.pricePerMeter.max} thousand rubles per m²
        //                   </div>
        //               </div>

        //               {/* Location */}
        //               <div className="flex items-center gap-2 mb-6 flex-wrap">
        //                   <span className="text-red-500">M</span>
        //                   <span>
        //                       {building.location}, {building.transportTime} min. by transport
        //                   </span>
        //               </div>

        //               {/* Action Buttons */}
        //               <div className="flex gap-4 mb-6 flex-wrap">
        //                   <button className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors">
        //                       Developer contacts
        //                   </button>
        //                   <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
        //                       Callback
        //                   </button>
        //                   <button className="p-3 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors">
        //                       <Heart className="w-6 h-6" />
        //                   </button>
        //               </div>

        //               {/* Photo Count */}
        //               <button className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit">
        //                   <Camera className="w-5 h-5" />
        //                   <span>{building.photos} photos</span>
        //               </button>

        //               {/* Developer Info */}
        //               <div className="flex items-center gap-4 my-8 pb-4 flex-wrap">
        //                   <div className="font-bold text-xl">самолет</div>
        //                   <div className="text-sm">developer #1</div>
        //                   <div className="flex items-center gap-2">
        //                       <span className="text-yellow-400">⭐</span>
        //                       <span>{building.rating}</span>
        //                       <span className="opacity-80">• {building.totalRatings} ratings</span>
        //                   </div>
        //               </div>

        //               {/* Navigation Tabs */}
        //               <div
        //                   className="absolute bottom-0 left-0 w-full flex gap-6 text-md mt-4 backdrop-blur-lg p-5 overflow-x-auto"
        //               >
        //                   {[
        //                       'Mortgage',
        //                       'Apartments',
        //                       'Discounts and promotions',
        //                       'Description',
        //                       'Infrastructure',
        //                       'Construction progress',
        //                   ].map((tab) => (
        //                       <button key={tab} className="hover:text-red-800 transition-colors">
        //                           {tab}
        //                       </button>
        //                   ))}
        //               </div>
        //           </div>
        //       </div>

        //       <div><BuildingLCDParameters /></div>


        //                   {/* Leave a request secction */}
        //       <div className="max-w-5xl mx-auto p-4">
        //           <div className="bg-gray-100 rounded-3xl overflow-hidden flex flex-col md:flex-row">
        //               {/* Left Content */}
        //               <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-6">
        //                   <div className="flex items-center space-x-2">
        //                       <div className="bg-black rounded-full p-2">
        //                           <span className="text-white text-xl">Я</span>
        //                       </div>
        //                       <span className="font-medium text-lg">Недвижимость</span>
        //                   </div>

        //                   <div className="space-y-4">
        //                       <div>
        //                           <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-2xl font-bold inline-block">
        //                               NEW BUILDINGS
        //                           </span>
        //                       </div>

        //                       <h2 className="text-4xl font-bold leading-tight text-gray-800">
        //                           TO SUIT YOUR BUDGET
        //                       </h2>

        //                       <p className="text-gray-600 text-lg">
        //                           You provide your wishes, we provide suitable options
        //                       </p>

        //                       <button className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 hover:text-white transition-colors mt-4">
        //                           Leave a request
        //                       </button>
        //                   </div>
        //               </div>

        //               {/* Right Image */}
        //               <div className="md:w-1/2">
        //                   <div className="h-full relative">
        //                       <img
        //                           src="https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/2ecf084f93f58492379e90f0f65258f1.png"
        //                           alt="Cozy living room"
        //                           className="w-full h-full object-cover"
        //                       />
        //                       <div className="absolute inset-0 bg-gradient-to-t from-brown-300/20 to-transparent"></div>
        //                   </div>
        //               </div>
        //           </div>
        //       </div>


        //           <div className="">
        //               <PropertyListing />
        //           </div>

        //           {/* Fixed Right Content */}
        //           <div className="">
        //               <div className="lg:sticky lg:top-[620px]">
        //                   <BuildingContactCard />
        //               </div>
        //           </div>



        //       {/* EMI Calculator */}
        //       <div className="max-w-7xl mx-auto p-6">
        //           <EMICalculator />
        //       </div>



        //   </div>

        <div className="min-h-screen">
            {/* Main Layout Container */}
            <div className="relative">
                {/* Header Section */}
                <header className="relative w-full h-[600px] text-white">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url('https://avatars.mds.yandex.net/get-verba/1030388/2a000001938ce9be0abf7ab6887cda1e8512/realty_special_photo_2100')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                    </div>

                    {/* Header Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 max-w-7xl mx-auto">
                        <nav className="absolute top-4 left-6 text-sm flex flex-wrap items-center gap-2 opacity-80">
                            <span>Real estate in Moscow and Moscow region</span>
                            <span>•</span>
                            <span>Buy</span>
                            <span>•</span>
                            <span>Apartment in a new building</span>
                            <span>•</span>
                            <span>{building?.name}</span>
                        </nav>

                        {/* Status Tags */}
                        <div className="flex gap-2 mb-4 flex-wrap">
                            <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
                                under construction
                            </span>
                            <span className="px-3 py-1 bg-black bg-opacity-50 rounded-lg text-sm">
                                comfort
                            </span>
                        </div>

                        {/* Building Title */}
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                            <h1 className="text-4xl sm:text-3xl font-bold">{building.name}</h1>
                            <div className="flex items-center">
                                <span className="text-yellow-400 text-2xl">⭐</span>
                                <span className="text-2xl ml-1">{building.rating}</span>
                            </div>
                        </div>

                        {/* Price Range */}
                        <div className="mb-3">
                            <div className="text-2xl font-bold">
                                {building.priceRange.min} — {building.priceRange.max} ₽
                            </div>
                            <div className="text-sm opacity-80">
                                {building.pricePerMeter.min} - {building.pricePerMeter.max} thousand rubles per m²
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-6 flex-wrap">
                            <span className="text-red-500">M</span>
                            <span>
                                {building.location}, {building.transportTime} min. by transport
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-6 flex-wrap">
                            <button className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors">
                                Developer contacts
                            </button>
                            <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
                                Callback
                            </button>
                            <button className="p-3 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors">
                                <Heart className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Photo Count */}
                        <button className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-50 rounded-lg hover:bg-opacity-60 transition-colors w-fit">
                            <Camera className="w-5 h-5" />
                            <span>{building.photos} photos</span>
                        </button>

                        {/* Developer Info */}
                        <div className="flex items-center gap-4 my-8 pb-4 flex-wrap">
                            <div className="font-bold text-xl">самолет</div>
                            <div className="text-sm">developer #1</div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400">⭐</span>
                                <span>{building.rating}</span>
                                <span className="opacity-80">• {building.totalRatings} ratings</span>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <div
                            className="absolute bottom-0 left-0 w-full flex gap-6 text-md mt-4 backdrop-blur-lg p-5 overflow-x-auto"
                        >
                            {[
                                'Mortgage',
                                'Apartments',
                                'Discounts and promotions',
                                'Description',
                                'Infrastructure',
                                'Construction progress',
                            ].map((tab) => (
                                <button key={tab} className="hover:text-red-800 transition-colors">
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Content Grid Layout */}
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                        {/* Main Content Area */}
                        <main className="lg:col-span-8">
                            <div className="space-y-8">
                                <BuildingLCDParameters />

                                {/* Request Section */}
                                <div className="bg-gray-100 rounded-3xl overflow-hidden">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="p-8 md:w-1/2 flex flex-col justify-center space-y-6">
                                            <div className="flex items-center space-x-2">
                                                <div className="bg-black rounded-full p-2">
                                                    <span className="text-white text-xl">Я</span>
                                                </div>
                                                <span className="font-medium text-lg">Недвижимость</span>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-2xl font-bold inline-block">
                                                        NEW BUILDINGS
                                                    </span>
                                                </div>
                                                <h2 className="text-4xl font-bold leading-tight text-gray-800">
                                                    TO SUIT YOUR BUDGET
                                                </h2>
                                                <p className="text-gray-600 text-lg">
                                                    You provide your wishes, we provide suitable options
                                                </p>
                                                <button className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 hover:text-white transition-colors">
                                                    Leave a request
                                                </button>
                                            </div>
                                        </div>

                                        <div className="md:w-1/2">
                                            <div className="h-full relative">
                                                <img
                                                    src="https://yastatic.net/s3/realty-front-deploy/build-static/realty-front-desktop/_/2ecf084f93f58492379e90f0f65258f1.png"
                                                    alt="Cozy living room"
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-brown-300/20 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <PropertyListing />

                                <div className="px-4">
                                    <EMICalculator />
                                </div>
                            </div>
                        </main>

                        {/* Sidebar with Contact Card */}
                        <aside className="lg:col-span-4">
                            <div className="sticky top-24">
                                <BuildingContactCard />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingDetailPage