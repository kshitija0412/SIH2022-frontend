import * as React from "react";
import { Image } from "@mantine/core";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { FaHome, FaPhoneAlt, FaInfoCircle, FaQuestion } from "react-icons/fa";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Emblem from "./ashok_emblem.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

export default function Header() {
	// const [anchorEl, setAnchorEl] = React.useState(null);
	// const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	// const isMenuOpen = Boolean(anchorEl);
	// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	// const handleProfileMenuOpen = (event) => {
	// 	setAnchorEl(event.currentTarget);
	// };

	// const handleMobileMenuClose = () => {
	// 	setMobileMoreAnchorEl(null);
	// };

	// const handleMenuClose = () => {
	// 	setAnchorEl(null);
	// 	handleMobileMenuClose();
	// };

	// const handleMobileMenuOpen = (event) => {
	// 	setMobileMoreAnchorEl(event.currentTarget);
	// };

	// const menuId = "primary-search-account-menu";
	// const renderMenu = (
	// 	<Menu
	// 		anchorEl={anchorEl}
	// 		anchorOrigin={{
	// 			vertical: "top",
	// 			horizontal: "right",
	// 		}}
	// 		id={menuId}
	// 		keepMounted
	// 		transformOrigin={{
	// 			vertical: "top",
	// 			horizontal: "right",
	// 		}}
	// 		open={isMenuOpen}
	// 		onClose={handleMenuClose}
	// 	>
	// 		<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
	// 		<MenuItem onClick={handleMenuClose}>My account</MenuItem>
	// 	</Menu>
	// );

	const theme = createTheme({
		palette: {
			primary: {
				light: "#000000",
				main: "#1B1D21",
				dark: "#505662",
				contrastText: "#fff",
			},
		},
	});

	// const mobileMenuId = "primary-search-account-menu-mobile";
	// const renderMobileMenu = (
	// 	<Menu
	// 		anchorEl={mobileMoreAnchorEl}
	// 		anchorOrigin={{
	// 			vertical: "top",
	// 			horizontal: "right",
	// 		}}
	// 		id={mobileMenuId}
	// 		keepMounted
	// 		transformOrigin={{
	// 			vertical: "top",
	// 			horizontal: "right",
	// 		}}
	// 		open={isMobileMenuOpen}
	// 		onClose={handleMobileMenuClose}
	// 	>
	// 		<MenuItem onClick={handleProfileMenuOpen}>
	// 			<IconButton
	// 				size="large"
	// 				aria-label="account of current user"
	// 				aria-controls="primary-search-account-menu"
	// 				aria-haspopup="true"
	// 				color="inherit"
	// 			>
	// 				<AccountCircle />
	// 			</IconButton>
	// 			<p>Profile</p>
	// 		</MenuItem>
	// 	</Menu>
	// );

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ flexGrow: 1 }} color="primary">
				<AppBar position="fixed" style={{ height: "55px" }}>
					<Toolbar>
						<Image
							width={30}
							height={50}
							fit="contain"
							src={Emblem}
							alt="National Emblem"
							style={{ margin: "0 2px 12px 10px" }}
						/>
						<Typography
							noWrap
							component="div"
							sx={{ display: { xs: "none", sm: "block" } }}
							style={{
								margin: "0 0 10px 5px",
								verticalAlign: "middle",
								position: "relative",
								fontSize: "16px",
							}}
						>
							Government of India | Ministry of Education
						</Typography>

						<Box sx={{ flexGrow: 1 }} />
						<Toolbar style={{ padding: "0 0 0 0" }}>
							<Box
								sx={{
									flexGrow: 1,
								}}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									"& > *": { m: 1 },
								}}
							>
								<ButtonGroup
									disableElevation
									variant="contained"
									aria-label="outlined primary button group"
									style={{ margin: "0 0 8px 0" }}
								>
									<Button
										component={Link}
										to={"/home"}
										style={{ color: "#ffffff", textTransform: "capitalize" }}
									>
										<FaHome
											style={{ margin: "0 10px 2px 0", opacity: "90%" }}
										/>
										Home
									</Button>
									<Button
										component={Link}
										to={"/about"}
										style={{ color: "#ffffff", textTransform: "capitalize" }}
									>
										<FaPhoneAlt
											style={{ margin: "0 10px 5px 0", opacity: "90%" }}
										/>
										About
									</Button>
									<Button
										component={Link}
										to={"/contact"}
										style={{ color: "#ffffff", textTransform: "capitalize" }}
									>
										<FaInfoCircle
											style={{ margin: "0 10px 2px 0", opacity: "90%" }}
										/>
										Contact
									</Button>
									<Button
										component={Link}
										to={"/faqs"}
										style={{ color: "#ffffff", textTransform: "capitalize" }}
									>
										<FaQuestion
											style={{ margin: "0 10px 3px 0", opacity: "90%" }}
										/>
										FAQs
									</Button>
								</ButtonGroup>
							</Box>
						</Toolbar>
					</Toolbar>
				</AppBar>
				{/* {renderMobileMenu}
				{renderMenu} */}
			</Box>
		</ThemeProvider>
	);
}
