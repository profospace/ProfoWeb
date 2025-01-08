// import React from 'react';
// import SearchHeader from '../components/SearchHeader';
// import PropertiesByLocationCarousal from '../components/PropertiesByLocationCarousal';
// import PropertyTypeInCarousal from '../components/PropertyTypeInCarousal';
// import SearchBar from '../components/SearchBar';

// function Home() {

    
//     return (
//         <div className="w-full px-8">
//             <div className="relative w-full">
//                 {/* <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative overflow-hidden">
//                     <img
//                         src="/assets/background.jpg"
//                         alt="Background"
//                         className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//                     />
//                 </div>

//                 <div className="absolute left-1/2 lg:top-3/4 md:top-3/4 top-1/4  transform -translate-x-1/2 -bottom-28 w-[90%] md:w-[80%] lg:w-[70%] max-w-[1200px]">
//                     <SearchHeader />
//                 </div> */}

//                 <div className="relative w-full h-screen bg-white overflow-hidden py-2">
                   
//                     <div className="absolute inset-0 flex items-center justify-center opacity-55">
//                         <img
//                             src="/assets/bg-home.svg"
//                             alt="City buildings background"
//                             className="object-contain"
//                         />
//                     </div>

                    
//                     <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
//                         <div className="text-center">
                            
//                             <div className="">
//                                 <h1 className="text-2xl sm:text-6xl lg:text-[6rem] font-bold leading-none animate-slide-up">
//                                     Search Property
//                                 </h1>
//                                 <h1 className="text-2xl sm:text-6xl lg:text-[6rem] font-bold leading-none animate-slide-up-delay ">
//                                     On Map
//                                 </h1>
//                                 <h1 className="text-2xl sm:text-6xl lg:text-[6rem] font-bold leading-none animate-slide-up-delay flex justify-center gap-0 relative">
//                                     Directly
//                                     <img src='/assets/map.png' className='absolute right-8 w-32 h-auto' />
//                                 </h1>

//                             </div>

                            
//                             <p className="mx-auto max-w-[35.9rem] text-base sm:text-lg lg:text-xl font-thin text-center py-2 lg:py-2">
//                                 Fully furnished, designer homes with no brokerage, low deposits, and zero hassle. Just bring your clothes & you're all set.
//                             </p>

                            
//                         </div>
//                             <div className='table mx-auto'>
//                     <button className="px-8 text-white rounded-full text-lg font-medium transition-colors duration-200">
//                         <SearchBar />
//                     </button>
//                             </div>
//                     </div>
//                 </div>


//             </div>

//             <div className='mt-32 py-12'>
//                 <PropertiesByLocationCarousal />
//             </div>

//             <div className='mt-32 py-12'>
//                 <PropertyTypeInCarousal />
//             </div>
//         </div>
//     );
// }

// export default Home;


import React from 'react';
import SearchHeader from '../components/SearchHeader';
import PropertiesByLocationCarousal from '../components/PropertiesByLocationCarousal';
import PropertyTypeInCarousal from '../components/PropertyTypeInCarousal';
import SearchBar from '../components/SearchBar';
import FeaturesGrid from '../components/FeaturesGrid';
import WhyChooseOfoSpace from '../components/WhyChooseOfoSpace';

function Home() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="relative w-full h-screen bg-white overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60 animate-fade-in">
                    <img
                        src="/assets/bg-home.svg"
                        alt="City buildings background"
                        className="w-full h-auto object-contain opacity-20"
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-bold leading-none animate-slide-up">
                            Search Property
                        </h1>
                        <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-bold leading-none animate-slide-up-delay">
                            On Map
                        </h1>
                        <h1 className="text-4xl sm:text-6xl lg:text-[6rem] font-bold leading-none flex justify-center animate-slide-up-delay-2 relative">
                            Directly
                            <img
                                src="/assets/map.png"
                                alt="Map Icon"
                                className="absolute right-20 w-20 h-auto lg:w-36"
                            />
                        </h1>
                        <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl font-light text-center">
                            Fully furnished, designer homes with no brokerage, low deposits, and zero hassle. Just bring
                            your clothes & you're all set.
                        </p>
                    </div>

                    {/* Search Bar Button */}
                    <div className="mt-4 table mx-auto">
                        <button className="px-8 py-3 text-white rounded-full text-lg font-medium transition-colors duration-300">
                            <SearchBar />
                        </button>
                    </div>
                </div>
            </div>

            {/* Properties by Location Section */}
            <div className="mt-12">
                <PropertiesByLocationCarousal />
            </div>

            {/* Property Type Section */}
            <div className="mt-6">
                <PropertyTypeInCarousal />
            </div>
            <div className="mt-6">
                <FeaturesGrid />
            </div>
            <div className="mt-6">
                <WhyChooseOfoSpace />
            </div>
        </div>
    );
}

export default Home;
