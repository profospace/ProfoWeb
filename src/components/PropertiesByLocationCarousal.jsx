// import React from 'react';
// import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

// const ProjectCard = ({ project }) => (
//     <div className="relative w-72 bg-white rounded-lg overflow-hidden">
//         <div className="relative h-48">
//             <img
//                 src={project.image || "/api/placeholder/400/320"}
//                 alt={project.title}
//                 className="w-full h-full object-cover rounded-md shadow-sm "
//             />
//             <div className="absolute top-4 left-4 flex gap-2">
//                 {project.rera && (
//                     <span className="px-2 py-[0.5px] bg-teal-500 text-white text-[10px] rounded">
//                         RERA
//                     </span>
//                 )}
//                 {project.seen && (
//                     <span className="px-2 py-[0.5px] bg-gray-900 text-white text-[10px] rounded">
//                         SEEN
//                     </span>
//                 )}
//             </div>
//             <button className="absolute top-4 right-4 p-1 rounded-full bg-white/80 hover:bg-white">
//                 <Heart className="w-5 h-5" />
//             </button>
//             <div className="absolute bottom-1 left-2">
//                 <span className="px-2 py-[0.5px] text-white font-semibold text-sm rounded">
//                     {project.status}
//                 </span>
//             </div>
//         </div>
//         <div className="py-4">
//             <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
//             <p className="text-sm text-gray-600 mb-2">{project.description}</p>
//             <p className="text-lg font-bold text-gray-900">₹ {project.price}</p>
//         </div>
//     </div>
// );

// const PropertiesByLocationCarousal = () => {
//     const [currentIndex, setCurrentIndex] = React.useState(0);

//     const projects = [
//         {
//             title: "Barsana Shatabdi Vihar",
//             description: "2 BHK Villa in Bithoor, Kanpur",
//             price: "29 L",
//             status: "Ready To Move",
//             rera: true,
//             seen: true,
//             image: "/assets/d_hp_property_type_90.webp"
//         },
//         {
//             title: "Nirvanaa Casa Vrindavan",
//             description: "Land in Maharajpur, Kanpur",
//             price: "7.36 - 61.34 L",
//             status: "Ready To Move",
//             seen: true,
//             image: "/assets/d_hp_property_type_1.webp"
//         },
//         {
//             title: "Maharaja Residency",
//             description: "Land in Bithoor, Kanpur",
//             price: "16 L",
//             status: "Ready To Move",
//             rera: true,
//             seen: true,
//             image: "/assets/d_hp_property_type_5.webp"
//         },
//         {
//             title: "Nirvanaa Casa Vrindavan",
//             description: "Land in Maharajpur, Kanpur",
//             price: "7.36 - 61.34 L",
//             status: "Ready To Move",
//             seen: true,
//             image: "/assets/d_hp_property_type_3.webp"
//         },
//         {
//             title: "Maharaja Residency",
//             description: "Land in Bithoor, Kanpur",
//             price: "16 L",
//             status: "Ready To Move",
//             rera: true,
//             seen: true,
//             image: "/assets/d_hp_property_type_4.webp"
//         },
//         {
//             title: "Barsana Shatabdi Vihar",
//             description: "2 BHK Villa in Bithoor, Kanpur",
//             price: "29 L",
//             status: "Ready To Move",
//             rera: true,
//             seen: true,
//             image: "/assets/d_hp_property_type_90.webp"
//         },
//         {
//             title: "Nirvanaa Casa Vrindavan",
//             description: "Land in Maharajpur, Kanpur",
//             price: "7.36 - 61.34 L",
//             status: "Ready To Move",
//             seen: true,
//             image: "/assets/d_hp_property_type_1.webp"
//         },
//         {
//             title: "Maharaja Residency",
//             description: "Land in Bithoor, Kanpur",
//             price: "16 L",
//             status: "Ready To Move",
//             rera: true,
//             seen: true,
//             image: "/assets/d_hp_property_type_5.webp"
//         },
//         {
//             title: "Nirvanaa Casa Vrindavan",
//             description: "Land in Maharajpur, Kanpur",
//             price: "7.36 - 61.34 L",
//             status: "Ready To Move",
//             seen: true,
//             image: "/assets/d_hp_property_type_3.webp"
//         },
//         {
//             title: "Maharaja Residency",
//             description: "Land in Bithoor, Kanpur",
//             price: "16 L",
//             status: "Ready To Move",
//             rera: true,
//             seen: true,
//             image: "/assets/d_hp_property_type_4.webp"
//         }
//     ];

//     // const nextSlide = () => {
//     //     setCurrentIndex((prev) =>
//     //         prev === projects.length - 1 ? 0 : prev + 1
//     //     );
//     // };

//     // const prevSlide = () => {
//     //     setCurrentIndex((prev) =>
//     //         prev === 0 ? projects.length - 1 : prev - 1
//     //     );
//     // };
    
//     const nextSlide = () => {
//         setCurrentIndex((prev) =>
//             prev < projects.length - 3 ? prev + 3 : prev
//         );
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prev) =>
//             prev > 0 ? prev - 3 : prev
//         );
//     };

    


//     return (
//         <div className="w-full max-w-6xl mx-auto px-1">
//             <div className="mb-8">
//                 <h2 className="text-2xl font-bold text-gray-900">Recommended Projects</h2>
//                 <p className="text-gray-600">The most searched projects in Kanpur</p>
//             </div>

//             <div className="relative">
//                 <div className="flex gap-6 overflow-hidden">
//                     {projects.map((project, index) => (
//                         <div
//                             key={index}
//                             className="transition-transform duration-300 ease-in-out"
//                             style={{
//                                 transform: `translateX(-${currentIndex * 100}%)`,
//                             }}
//                         >
//                             <ProjectCard project={project} />
//                         </div>
//                     ))}
//                 </div>

//                 {/* <button
//                     onClick={prevSlide}
//                     className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
//                 >
//                     <ChevronLeft className="w-6 h-6" />
//                 </button>

//                 <button
//                     onClick={nextSlide}
//                     className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
//                 >
//                     <ChevronRight className="w-6 h-6" />
//                 </button> */}
//                 <button
//                     onClick={prevSlide}
//                     disabled={currentIndex === 0}
//                     className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
//                         }`}
//                 >
//                     <ChevronLeft className="w-6 h-6" />
//                 </button>

//                 <button
//                     onClick={nextSlide}
//                     disabled={currentIndex === projects.length - 1}
//                     className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 ${currentIndex === projects.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
//                         }`}
//                 >
//                     <ChevronRight className="w-6 h-6" />
//                 </button>

//             </div>
//         </div>
//     );
// };

// export default PropertiesByLocationCarousal;

import React from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const ProjectCard = ({ project }) => (
    <div className="relative w-72 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden border border-white/20">
        <div className="relative h-48">
            <img
                src={project.image || "/api/placeholder/400/320"}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-lg"
            />
            <div className="absolute top-4 left-4 flex gap-2">
                {project.rera && (
                    <span className="px-2 py-1 bg-teal-600/70 text-white text-xs rounded-lg shadow-sm backdrop-blur-md">
                        RERA
                    </span>
                )}
                {project.seen && (
                    <span className="px-2 py-1 bg-gray-800/70 text-white text-xs rounded-lg shadow-sm backdrop-blur-md">
                        SEEN
                    </span>
                )}
            </div>
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/50 backdrop-blur-md hover:bg-white/80 shadow-md">
                <Heart className="w-5 h-5 text-gray-800" />
            </button>
            <div className="absolute bottom-2 left-4">
                <span className="px-2 py-1 text-white font-semibold text-sm rounded-lg bg-black/60 backdrop-blur-md shadow-sm">
                    {project.status}
                </span>
            </div>
        </div>
        <div className="py-4 px-4">
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <p className="text-lg font-bold text-gray-900">₹ {project.price}</p>
        </div>
    </div>
);

const PropertiesByLocationCarousal = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

        const projects = [
            {
                title: "Barsana Shatabdi Vihar",
                description: "2 BHK Villa in Bithoor, Kanpur",
                price: "29 L",
                status: "Ready To Move",
                rera: true,
                seen: true,
                image: "/assets/d_hp_property_type_90.webp"
            },
            {
                title: "Nirvanaa Casa Vrindavan",
                description: "Land in Maharajpur, Kanpur",
                price: "7.36 - 61.34 L",
                status: "Ready To Move",
                seen: true,
                image: "/assets/d_hp_property_type_1.webp"
            },
            {
                title: "Maharaja Residency",
                description: "Land in Bithoor, Kanpur",
                price: "16 L",
                status: "Ready To Move",
                rera: true,
                seen: true,
                image: "/assets/d_hp_property_type_5.webp"
            },
            {
                title: "Nirvanaa Casa Vrindavan",
                description: "Land in Maharajpur, Kanpur",
                price: "7.36 - 61.34 L",
                status: "Ready To Move",
                seen: true,
                image: "/assets/d_hp_property_type_3.webp"
            },
            {
                title: "Maharaja Residency",
                description: "Land in Bithoor, Kanpur",
                price: "16 L",
                status: "Ready To Move",
                rera: true,
                seen: true,
                image: "/assets/d_hp_property_type_4.webp"
            },
            {
                title: "Barsana Shatabdi Vihar",
                description: "2 BHK Villa in Bithoor, Kanpur",
                price: "29 L",
                status: "Ready To Move",
                rera: true,
                seen: true,
                image: "/assets/d_hp_property_type_90.webp"
            },
            {
                title: "Nirvanaa Casa Vrindavan",
                description: "Land in Maharajpur, Kanpur",
                price: "7.36 - 61.34 L",
                status: "Ready To Move",
                seen: true,
                image: "/assets/d_hp_property_type_1.webp"
            },
            {
                title: "Maharaja Residency",
                description: "Land in Bithoor, Kanpur",
                price: "16 L",
                status: "Ready To Move",
                rera: true,
                seen: true,
                image: "/assets/d_hp_property_type_5.webp"
            },
            {
                title: "Nirvanaa Casa Vrindavan",
                description: "Land in Maharajpur, Kanpur",
                price: "7.36 - 61.34 L",
                status: "Ready To Move",
                seen: true,
                image: "/assets/d_hp_property_type_3.webp"
            },
            {
                title: "Maharaja Residency",
                description: "Land in Bithoor, Kanpur",
                price: "16 L",
                status: "Ready To Move",
                rera: true,
                seen: true,
                image: "/assets/d_hp_property_type_4.webp"
            }
        ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev < projects.length - 3 ? prev + 3 : prev));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 3 : prev));
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-1">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Recommended Projects</h2>
                <p className="text-gray-600">The most searched projects in Kanpur</p>
            </div>

            <div className="relative">
                <div className="flex gap-6 overflow-hidden py-6 ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="transition-transform duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/30 backdrop-blur-lg rounded-full shadow-md flex items-center justify-center hover:bg-white/50 transition-opacity duration-200 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                </button>

                <button
                    onClick={nextSlide}
                    disabled={currentIndex >= projects.length - 3}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/30 backdrop-blur-lg rounded-full shadow-md flex items-center justify-center hover:bg-white/50 transition-opacity duration-200 ${currentIndex >= projects.length - 3 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                </button>
            </div>
        </div>
    );
};

export default PropertiesByLocationCarousal;
