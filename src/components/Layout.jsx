import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from '../components/Footer'
import LoadingPage from './LoadingPage'
import FiltersSection from "../components/FiltersSection";


function Layout() {
    return (

        <>
            <Navbar />
            <FiltersSection /> {/* includes filter carousal + filter Btn */}
            <Suspense fallback={<LoadingPage />}>
                <Outlet />
            <Footer />
            </Suspense>
        </>

    )
}

export default Layout