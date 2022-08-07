import React from "react";
import { Outlet } from "react-router-dom";
import FacultyDashboard from "../Dashboard/FacultyDashboard";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollAffix from "./ScrollAffix";
import Demo from "./Demo";

function Layout() {
	return (
		<div>
			{/* All common elements */}
			{/* Header */}
			<Header />
			<NavBar />
			{/* <Demo /> */}
			{/* <FacultyDashboard /> */}
			<ScrollAffix />
			<Outlet />
			{/* <Footer /> */}
			{/* Footer */}
		</div>
	);
}

export default Layout;
