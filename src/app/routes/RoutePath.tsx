// import React, { Suspense, lazy } from 'react';
import { Routes,  Route } from 'react-router-dom';
// const Home = lazy(() => import("../components/pages/Home.tsx"));
import Home from '../components/Home.tsx';
import About from '../components/About.tsx';
// import GetinTouch from '../components/GetinTouch.tsx';
// import ResumePage from '../components/ResumePage.tsx';
// import HireMePage from '../components/HireMePage.tsx';
//import ContactPage from '../components/ContactPage.tsx';
import ProjectsPage from '../components/ProjectsPage.tsx';
import ProjectDetails from '../components/CaseStudies/ProjectDetails.tsx'
// import AdminDashboard from '../components/AdminDashboard.tsx'

const RoutePath = () => {
 
	return (
				
		<Routes>
        <Route path="/" element={<Home />} />
		<Route path="/Home" element={<Home />} />
		<Route path="/About" element={<About />} />
		<Route path="/ProjectsPage" element={<ProjectsPage />} />
		<Route path="/CaseStudies/:id" element={<ProjectDetails />} />
		{/* <Route path="/HireMePage" element={<HireMePage/>} />
		<Route path="/ContactPage" element={<ContactPage/>} />
		<Route path="/ResumePage" element={<ResumePage/>} />
		<Route path="/AdminDashboard" element={<AdminDashboard/>} /> */}

        </Routes>
	
	);
	
};

export default RoutePath;
