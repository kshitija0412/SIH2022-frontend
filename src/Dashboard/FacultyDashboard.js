import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#88dbce",
			main: "#6BD3C2",
			dark: "#4a9387",
			contrastText: "#fff",
		},
		secondary: {
			light: "#639d93",
			main: "#3D8579",
			dark: "#2a5d54",
			contrastText: "#fff",
		},
	},
});

const buttons = [
	<Button
		key="one"
		component={Link}
		to={"/facultyDashboard"}
	>
		<h2 style={{
			textTransform: "capitalize",
			height: "50px",
			verticalAlign: "top",
		}}>Dashboard</h2>
	</Button>,
	<Button
		key="two"
		component={Link}
		to={"/application"}
		style={{ textTransform: "capitalize", fontWeight: "bold" }}
	>
		My Applications
	</Button>,
	<Button
		key="three"
		component={Link}
		to={"/facultyProfile"}
		style={{ textTransform: "capitalize", fontWeight: "bold" }}
	>
		Edit Profile
	</Button>,
	<Button
		key="four"
		component={Link}
		to={"/changePass"}
		style={{ textTransform: "capitalize", fontWeight: "bold" }}
	>
		Change Password
	</Button>,
	<Button
		key="five"
		component={Link}
		to={"/signOut"}
		style={{ textTransform: "capitalize", fontWeight: "bold" }}
	>
		Sign Out
	</Button>,
];

export default function FacultyDashboard() {
	return (
		<>
		<ThemeProvider theme={theme}>
			<Box sx={{ display: "flex", "& > *": { m: 1 } }} style= {{marginTop: "40px", position: "fixed"}}>
				<ButtonGroup
					orientation="vertical"
					aria-label="vertical contained button group"
					variant="contained"
					color="primary"
				>
					{buttons}
				</ButtonGroup>
			</Box>
		</ThemeProvider>
		</>
	);
}

// export default FacultyDashboard;
