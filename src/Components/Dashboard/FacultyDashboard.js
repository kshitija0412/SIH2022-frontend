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
		style={{
			height: "8ch",
			fontSize: "3.5ch",
			fontWeight: "bold",
			textTransform: "capitalize",
			verticalAlign: "top",
		}}
	>
		Dashboard
	</Button>,
	<Button
		key="two"
		component={Link}
		to={"/application"}
		style={{
			height: "5ch",
			fontSize: "1.8ch",
			fontWeight: "bold",
			textTransform: "capitalize",
			verticalAlign: "top",
		}}
	>
		My Applications
	</Button>,
	<Button
		key="three"
		component={Link}
		to={"/facultyProfile"}
		style={{
			height: "5ch",
			fontSize: "1.8ch",
			fontWeight: "bold",
			textTransform: "capitalize",
			verticalAlign: "top",
		}}
	>
		Edit Profile
	</Button>,
	<Button
		key="five"
		component={Link}
		to={"/faculty"}
		style={{
			height: "5ch",
			fontSize: "1.8ch",
			fontWeight: "bold",
			textTransform: "capitalize",
			verticalAlign: "top",
		}}
	>
		View Profile
	</Button>,
	<Button
		key="four"
		component={Link}
		to={"/changePass"}
		style={{
			height: "5ch",
			fontSize: "1.8ch",
			fontWeight: "bold",
			textTransform: "capitalize",
			verticalAlign: "top",
		}}
	>
		Change Password
	</Button>,
	<Button
		key="five"
		component={Link}
		to={"/signOut"}
		style={{
			height: "5ch",
			fontSize: "1.8ch",
			fontWeight: "bold",
			textTransform: "capitalize",
			verticalAlign: "top",
		}}
	>
		Sign Out
	</Button>,
];

export default function FacultyDashboard() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box
					sx={{ display: "flex", "& > *": { m: 1 } }}
					style={{ margin: "4rem 0 20rem 1rem", position: "absolute" }}
				>
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
