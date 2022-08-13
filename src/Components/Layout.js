import React from "react";
import { Outlet } from "react-router-dom";
import FacultyDashboard from "../Components/Dashboard/FacultyDashboard";
import CollegeDashboard from "../Components/Dashboard/CollegeDashboard";
import Header from "./Marginals/Header";
import NavBar from "./Marginals/NavBar";
import Footer from "./Marginals/Footer";
import ScrollAffix from "./ScrollAffix";


function Layout() {
	return (
		<div>
			{/* All common elements */}
			<Header />
			<NavBar />
			{/* <Demo /> */}
			{/* <FacultyDashboard /> */}
			<CollegeDashboard />
			<Outlet />
			<Footer />
			<ScrollAffix />
		</div>
	);
}

export default Layout;

