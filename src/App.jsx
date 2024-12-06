import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";

/* Pages */
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

/* Layout Component */
import Layout from './components/Layout';
import FloatButtonShowMap from './components/FloatButtonShowMap'


function App() {
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
          </Route>
        </Routes>
    </div>
  );
}

export default App;
