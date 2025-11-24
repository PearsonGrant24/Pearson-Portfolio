import React, { Suspense, lazy } from 'react';
import { Routes,  Route, Router } from 'react-router-dom';
// const Home = lazy(() => import("../components/pages/Home.tsx"));
import Home from '../components/Home.tsx';
import About from '../components/About.tsx';
import GetinTouch from '../components/GetinTouch.tsx';
import SolarProducts from '../components/SolarProducts.tsx';
import Technology from '../components/Technology.tsx';
import Solutions from '../components/Solutions.tsx';


const RoutePath = () => {
 
	return (
		// <Suspense fallback={<Loader />}>
		// <BrowserRouter>
		
		<Routes>
        <Route path="/" element={<Home />} />
		<Route path="/Home" element={<Home />} />
		<Route path="/About" element={<About />} />
		<Route path="/GetinTouch" element={<GetinTouch />} />
		<Route path="/SolarProducts" element={<SolarProducts />} />
		<Route path="/technology" element={<Technology/>} />
		<Route path="/Solutions" element={<Solutions/>} />

        </Routes>
		
		// </BrowserRouter>
		// </Suspense>
	);
	
};

export default RoutePath;
