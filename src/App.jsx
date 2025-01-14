import React, { lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

/* Pages */
import Home from './pages/Home';
// const Home = lazy(() => import('./pages/Home'));
const PropertiesPage = lazy(() => import('./pages/PropertiesPage'));
const About = lazy(() => import('./pages/About'));
const SinglePage = lazy(() => import('./pages/SinglePage'));
// const Gallery = lazy(() => import('./pages/Gallery'));

/* Layout Component */
import Layout from './components/Layout';
import FloatButtonShowMap from './components/FloatButtonShowMap'

/* redux */
import { useDispatch } from 'react-redux';
import { getAllProperties } from './redux/features/Properties/propertiesSlice';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AllInOnePage from './pages/AllInOnePage';
import ProjectPage from './pages/ProjectPage';
import BuildingPage from './pages/BuildingPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import BuildingDetailPage from './pages/BuildingDetailPage';

function App() {
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  useEffect(
    () => {
      dispatch(getAllProperties())
    }, []
  )
  
  useEffect(
    ()=>{
      window.scrollTo({ top: 0, behavior: 'auto' });
    },[pathname]
  )

  return (
    <div className=''>
        {/* Custom Floating Button */}
      {/* <div className=''>
        <FloatButtonShowMap />
      </div> */}
        <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/all-in-one-page' element={<AllInOnePage />} />
            <Route path='/properties' element={<PropertiesPage />} />
            <Route path='/projects' element={<ProjectPage />} />
            <Route path='/buildings' element={<BuildingPage />} />

            {/* <Route path='/api/details/project/:post_id' element={<ProjectDetailPage />} /> projects detail page */}
          <Route path='/api/details/building/:buildingId' element={<BuildingDetailPage />} /> {/* buildings detail page */}
            <Route path='/api/details/:post_id' element={<SinglePage />} /> {/* properties */}
            {/* <Route path='/gallery' element={<Gallery />} /> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;
