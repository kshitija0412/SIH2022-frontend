import React from "react";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import DeleteIcon from "@mui/icons-material/Delete";
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

function UploadDelete() {
	return (
		<>
			<div className="flex-button">
				<div>
					<ThemeProvider theme={theme}>
						<Button
							variant="contained"
							component="label"
							color="secondary"
							startIcon={<UploadIcon />}
							style= {{textTransform: "capitalize"}}
						>
							Upload
							<input hidden accept="file" multiple type="file" />
						</Button>
					</ThemeProvider>
				</div>
				<div>
					<ThemeProvider theme={theme}>
						<Button
							variant="outlined"
							startIcon={<DeleteIcon />}
							color="secondary"
							style= {{textTransform: "capitalize"}}
						>
							Delete
						</Button>
					</ThemeProvider>
				</div>
			</div>
		</>
	);
}

export default UploadDelete;
