import React, { useEffect } from 'react'
import ServicesRow from '../components/ServicesRow'
import AllInOneCard from '../components/AllInOneCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBuildings } from '../redux/features/Buildings/buildingsSlice';
import PromoBanner from '../components/PromoBanner';

// Dummy data that matches the structure of future API response
const properties = [
    {
        id: 1,
        image: "assets/testing.avif",
        price: 5654985,
        name: "Eco Bunino",
        location: "Alder",
        metroLine: "red",
        duration: "21",
        isSamolet: true
    },
    {
        id: 2,
        image: "assets/testing.avif",
        price: 10988640,
        name: "CITYZEN",
        location: "Tushinskaya",
        metroLine: "purple",
        duration: "11",
        isSamolet: false
    },
    {
        id: 3,
        image: "assets/testing.avif",
        price: 15745064,
        name: "JOIS",
        location: "Khoroshevo",
        metroLine: "purple",
        duration: "7",
        isSamolet: false
    },
    {
        id: 4,
        image: "assets/testing.avif",
        price: 6700200,
        name: "Troparevo Park",
        location: "Rumyantsevo",
        metroLine: "red",
        duration: "14",
        isSamolet: true
    },
    {
        id: 5,
        image: "assets/testing.avif",
        price: 10386800,
        name: "SET",
        location: "Davydkovo",
        metroLine: "green",
        duration: "21",
        isSamolet: false
    },
    {
        id: 6,
        image: "assets/testing.avif",
        price: 10992069,
        name: "VEER",
        location: "Davydkovo",
        metroLine: "green",
        duration: "23",
        isSamolet: false
    }
];
function AllInOnePage() {
    const dispatch = useDispatch()
    const { buildings } = useSelector(state=>state.buildings)
    console.log(buildings)

    useEffect(
        ()=>{
            dispatch(getAllBuildings())
        },[]
    )
  return (
    <div className='flex flex-col gap-10'>
          {/* Buildings */}
          <div className="w-full bg-white py-2">
              <div className="max-w-7xl mx-auto px-4">
                  <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold">New buildings</h2>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 5l7 7-7 7" />
                          </svg>
                      </button>
                  </div>

                  {/* <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      {buildings.map((building) => (
                          <AllInOneCard
                              key={building._id}
                              {...building}
                          />
                      ))}
                  </div> */}

                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      {buildings.slice(0, 4).map((building) => (
                          <AllInOneCard
                              key={building._id}
                              {...building}
                          />
                      ))}
                  </div>

              </div>
          </div>

          {/* PromoBanner */}
        <div>
            <PromoBanner />
        </div>


          {/* Projects */}
          <div className="w-full bg-white py-2">
              <div className="max-w-7xl mx-auto px-4">
                  <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold">New buildings</h2>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 5l7 7-7 7" />
                          </svg>
                      </button>
                  </div>

                  {/* <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      {buildings.map((building) => (
                          <AllInOneCard
                              key={building._id}
                              {...building}
                          />
                      ))}
                  </div> */}

                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      {buildings.slice(0, 4).map((building) => (
                          <AllInOneCard
                              key={building._id}
                              {...building}
                          />
                      ))}
                  </div>

              </div>
          </div>

          {/* PromoBanner */}
          <div>
              <PromoBanner />
          </div>
    </div>
  )
}

export default AllInOnePage