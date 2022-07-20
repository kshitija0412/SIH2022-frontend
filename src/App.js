import React from "react";
import "./App.css";
import CollegeProfile from "./Components/Profile Components/CollegeProfile";
import FacultyProfile from "./Components/Profile Components/FacultyProfile";

function App() {
	return (
		<>
			<div className="App">
				<FacultyProfile />
				{/* <CollegeProfile /> */}
				{/* <div className="flex-container">
				<div>
					<Button variant="outline" color="black" onClick={prevStep}>
					<Button component="a" href="#" variant="outline" leftIcon={<ExternalLink size={14} />}>
						Faculty Profile
					</Button>
				</div>
				<div>
					<Button variant="outline" color="black" onClick={nextStep}>
						College Profile
					</Button>
				</div>
			</div> */}
			</div>
		</>
	);
}

export default App;