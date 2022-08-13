import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import "../Display Profile/Display.css";

function Grievance() {
	return (
		<div className="box">
			<div className="flex-container">
				<div>
					<Button component={Link} to="/postGrievance">
						Post Grievance
					</Button>
				</div>
				<div>
					<Button component={Link} to="/trackGrievance">
						Track Grievance
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Grievance;
