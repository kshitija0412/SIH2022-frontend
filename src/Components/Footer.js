import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			// light: "#393e46",
			light: "#000000",
			main: "#1B1D21",
			dark: "#e3e5e8",
			contrastText: "#fff",
		},
	},
});

function Footer() {
	return (
		<>
			<React.Fragment>
				<ThemeProvider theme={theme}>
					<AppBar
						position="fixed"
						color="primary"
						sx={{ top: "auto", bottom: 0 }}
					>
						<Toolbar>{/* <Box sx={{ flexGrow: 1 }} /> */}</Toolbar>
					</AppBar>
				</ThemeProvider>
			</React.Fragment>
		</>
	);
}

export default Footer;
