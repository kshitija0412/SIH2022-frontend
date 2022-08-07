import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CollegeProfile from "./Components/Profile Components/CollegeProfile";
import FacultyProfile from "./Components/Profile Components/FacultyProfile";
import Faculty from "./Components/Display Profile/Faculty";
import College from "./Components/Display Profile/College";
import Layout from "./Components/Layout";
import Grievance from "./Components/Grievance/Grievance";
import PostGrievance from "./Components/Grievance/PostGrievance";
import TrackGrievance from "./Components/Grievance/TrackGrievance";
import DepartmentDetails from "./Dashboard/DepartmentDetails";
import FacultyDashboard from "./Dashboard/FacultyDashboard";
import ApplicationStatus from "./Dashboard/ApplicationStatus";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="faculty" element={<Faculty />} />
						<Route path="college" element={<College />} />
						<Route path="facultyProfile" element={<FacultyProfile />} />
						<Route path="collegeProfile" element={<CollegeProfile />} />
						<Route path="grievance" element={<Grievance />} />
						<Route path="postGrievance" element={<PostGrievance />} />
						<Route path="trackGrievance" element={<TrackGrievance />} />
						<Route path="deptDetails" element={<DepartmentDetails />} />
						<Route path="facultyDashboard" element={<FacultyDashboard />} />
						<Route path="application" element={<ApplicationStatus />} />
						{/* <Route path="changePass" element={<ChangePassword />} />
						<Route path="facultySignout" element={<FacultySignout />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
