import React, { useState } from 'react';
import { Modal } from 'antd';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { GrWifi } from 'react-icons/gr';
import { FaKitchenSet } from 'react-icons/fa6';
import { Button } from "@material-tailwind/react";
import { IconButton } from '@material-tailwind/react';
import RangeSlider from '../components/RangeSlider';
import { useDispatch } from 'react-redux';
import { getAllFilteredProperties } from '../redux/features/Properties/propertiesSlice';

/* Beds, Baths, and Floors */
const FilterComponent = ({ modalOpen, setModalOpen }) => {
    const dispatch = useDispatch()
    const [minPrice, setMinPrice] = useState(50000); // State for minimum price
    const [maxPrice, setMaxPrice] = useState(7000000); // State for maximum price

    const [filters, setFilters] = useState({
        bedrooms: null,
        bathrooms: null,
        minPrice: 50000,
        maxPrice: 7000000,
        floors: null,
        amenities: [],
        propertyType: null,
    });
    console.log(filters)

    // const updateFilter = (key, value) => {
    //     setFilters((prev) => ({
    //         ...prev,
    //         [key]: value,
    //     }));
    // };

    const incrementFilter = (key) => {
        setFilters((prev) => ({
            ...prev,
            [key]: (prev[key] || 0) + 1,
        }));
    };

    const decrementFilter = (key) => {
        setFilters((prev) => ({
            ...prev,
            [key]: Math.max(0, (prev[key] || 0) - 1),
        }));
    };




    // Hardcoded limits for the price range
    const PRICE_RANGE = {
        min: 50000,
        max: 7000000,
    };

    const handleMinPrice = (e) => {
        const value = parseInt(e.target.value) || PRICE_RANGE.min; // Ensure numeric input
        setMinPrice(Math.max(value, PRICE_RANGE.min)); // Enforce min limit

        // Ensure minPrice doesn't exceed maxPrice
        if (value > maxPrice) {
            setMaxPrice(value);
        }
    };

    const handleMaxPrice = (e) => {
        const value = parseInt(e.target.value) || PRICE_RANGE.min; // Ensure numeric input
        setMaxPrice(Math.min(value, PRICE_RANGE.max)); // Enforce max limit

        // Ensure maxPrice doesn't go below minPrice
        if (value < minPrice) {
            setMinPrice(value);
        }
    };

    const handleSliderChange = (values) => {
        setMinPrice(values[0]);
        setMaxPrice(values[1]);
    };

    function handleDispatchFilter(e){
        e.preventDefault()
        setModalOpen(false)
        
        // dispatching filter 
        dispatch(getAllFilteredProperties(filters))
    }


    return (
        <Modal
            title=""
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)} // Closing modal on Ok
            onCancel={() => setModalOpen(false)} // Closing modal on Cancel
            footer={null} 
            bodyStyle={{ padding: '0px', maxHeight: '500px' }} 
        >
            <div className='w-full text-center'>
                <h1 className='font-bold text-xl py-2'>Filters</h1>
            </div>
            <hr />

            {/* Scrollable Content Section */}
            <div className="overflow-y-auto max-h-[400px] px-4">
                {/* Beds, Floors, and Bathrooms */}
                <div className='py-4'>
                    <h1 className='text-xl font-semibold'>Beds, Floors, and Bathrooms</h1>

                    {/* Beds */}
                    <div className='flex justify-between items-center py-2 mb-1'>
                        <div className='text-xl'>Beds</div>
                        <div className='flex items-center gap-3'>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('bedrooms')} disabled={filters.bedrooms < 1}>
                                <FaMinus />
                            </IconButton>
                            <div className='text-xl text-center min-w-10'>{filters.bedrooms ? filters.bedrooms + '+ ' : "Any"}</div>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('bedrooms')}>
                                <FaPlus />
                            </IconButton>
                        </div>
                    </div>

                    {/* Floors */}
                    <div className='flex justify-between items-center py-2 mb-1'>
                        <div className='text-xl'>Floors</div>
                        <div className='flex items-center gap-3'>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('floors')}>
                                <FaMinus />
                            </IconButton>
                            <div className='text-xl'>Any</div>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('floors')}>
                                <FaPlus />
                            </IconButton>
                        </div>
                    </div>

                    {/* Bathrooms */}
                    <div className='flex justify-between items-center py-2 mb-1'>
                        <div className='text-xl'>Bathrooms</div>
                        <div className='flex items-center gap-3'>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => decrementFilter('bathrooms')} disabled={filters.bathrooms < 1}>
                                <FaMinus />
                            </IconButton>
                            <div className='text-xl text-center min-w-10'>{filters.bathrooms ? filters.bathrooms + '+ ' : "Any"}</div>
                            <IconButton variant="outlined" className="rounded-full w-8 h-8" onClick={() => incrementFilter('bathrooms')}>
                                <FaPlus />
                            </IconButton>
                        </div>
                    </div>

                    <hr />
                </div>

                {/* Amenities */}
                <div className='py-4'>
                    <h1 className='text-xl font-semibold'>Amenities</h1>
                    <div className='flex gap-2 flex-wrap py-4'>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <GrWifi size={25} />
                            Wifi
                        </Button>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <FaKitchenSet size={25} />
                            Kitchen
                        </Button>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <GrWifi size={25} />
                            Wifi
                        </Button>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <FaKitchenSet size={25} />
                            Kitchen
                        </Button>
                    </div>
                    <hr></hr>
                </div>

                {/* Property Type */}
                <div className='py-4'>
                    <h1 className='text-xl font-semibold'>Property Type</h1>
                    <div className='flex gap-2 flex-wrap py-4'>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <GrWifi size={25} />
                            House
                        </Button>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <FaKitchenSet size={25} />
                            Apartment
                        </Button>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <GrWifi size={25} />
                            Guest House
                        </Button>
                        <Button variant="outlined" className="flex items-center gap-3 rounded-full py-2 w-full sm:w-auto">
                            <FaKitchenSet size={25} />
                            Plot
                        </Button>
                    </div>
                    <hr></hr>

                </div>

                {/* Price range */}
                <div className="py-4">
                    <h1 className="text-xl font-semibold">Price Range</h1>
                    {/* RangeSlider component */}
                    <RangeSlider
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        range={PRICE_RANGE}
                        onSliderChange={handleSliderChange}
                    />
                    <div className="flex justify-between items-center w-full max-w-md mx-auto p-4">
                        {/* Minimum */}
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-medium text-gray-500 mb-2">Minimum</span>
                            <input
                                type="number"
                                className="border rounded-full px-4 py-2 bg-white text-gray-900 shadow-md text-center w-32"
                                value={minPrice}
                                onChange={handleMinPrice}
                                min={PRICE_RANGE.min}
                            />
                        </div>

                        {/* Maximum */}
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-medium text-gray-500 mb-2">Maximum</span>
                            <input
                                type="number"
                                className="border-2 rounded-full px-4 py-2 bg-gray-100 text-gray-900 shadow-md border-gray-900 text-center w-32"
                                value={maxPrice}
                                onChange={handleMaxPrice}
                                max={PRICE_RANGE.max}
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Custom Footer with Buttons  , default antd footer is set falsed*/}
            <div className="flex justify-between gap-4 pt-4">
                <Button variant="text" className="flex items-center gap-2">
                    Clear all{" "}
                    {/* will ad icon if required */}
                </Button>
                <Button
                    onClick={
                        // Handle apply filter logic here
                        handleDispatchFilter
                    }
                    type="primary"
                    className="rounded-full px-6"
                >
                    Apply
                </Button>
            </div>
        </Modal>
    );
};

export default FilterComponent;
