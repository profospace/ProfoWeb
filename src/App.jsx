import React, { lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

/* Pages */
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const SinglePage = lazy(() => import('./pages/SinglePage'));
const Gallery = lazy(() => import('./pages/Gallery'));

/* Layout Component */
import Layout from './components/Layout';
import FloatButtonShowMap from './components/FloatButtonShowMap'

/* redux */
import { useDispatch } from 'react-redux';
import { getAllProperties } from './redux/features/Properties/propertiesSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getAllProperties())
    }, []
  )

  return (
    <div className='app '>
        {/* Custom Floating Button */}
      <div className=''>
        <FloatButtonShowMap />
      </div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/details/:post_id' element={<SinglePage />} />
            <Route path='/gallery' element={<Gallery />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
