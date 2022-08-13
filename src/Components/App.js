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
import DepartmentDetails from "./Components/Dashboard/DepartmentDetails";
import FacultyDashboard from "./Components/Dashboard/FacultyDashboard";
import ApplicationStatus from "./Components/Dashboard/ApplicationStatus";
import LandingPage from "./Components/Pages/LandingPage";
import PostJob from "./Components/Dashboard/PostJob";
import CollegeDashboard from "./Components/Dashboard/CollegeDashboard";
// import CollegeCM from "./Components/Card/CollegeCM";
// import Signup from "./Components/Pages/Signup";

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
						<Route path="collegeDashboard" element={<CollegeDashboard />} />
						<Route path="application" element={<ApplicationStatus />} />
						<Route path="postJob" element={<PostJob />} />
						{/* <Route path="collegeCard" element={<CollegeCard/>} /> */}
						<Route path="home" element={<LandingPage />} />
						{/* <Route path="signUp" element={<Signup />} /> */}
						{/* <Route path="changePass" element={<ChangePassword />} />
						<Route path="facultySignout" element={<FacultySignout />} /> */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
