import React, { lazy, Suspense } from 'react'
import {Routes,Route} from "react-router-dom"

/* Pages */
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

/* Layout Component */
import Layout from './components/Layout';
import LoadingPage from './components/LoadingPage';

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />

      </Route>
    </Routes>
    </Suspense>
  )
}

export default App