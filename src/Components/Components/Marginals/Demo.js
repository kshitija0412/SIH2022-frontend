import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

export default function Demo() {
	return (
		<AppBar position="fixed" style={{ marginTop: "95px", height: "50px" }}>
			<Container>
				<Toolbar>
					<Box
						sx={{
							flexGrow: 1,}}
                            style= {{display: "flex",
							flexDirection: "column",
							alignItems: "center",
							"& > *": {m: 1}
                        }}>
						<ButtonGroup
							disableElevation
							variant="contained"
							aria-label="outlined primary button group"
						>
							<Button component={Link} to={"/facultyDashboard"} style= {{color: "#ffffff"}}>Home</Button>
							<Button component={Link} to={"/facultyDashboard"}style= {{color: "#ffffff"}}>About</Button>
							<Button component={Link} to={"/facultyDashboard"}style= {{color: "#ffffff"}}>Contact</Button>
							<Button component={Link} to={"/facultyDashboard"}style= {{color: "#ffffff"}}>FAQs</Button>
						</ButtonGroup>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

// <div style={{ borderRight : "1px solid white", padding:"1rem"}}>
// 				<FaHome style={{marginRight:"0.5rem"}} />
// 			<span>Home</span>
// 			</div>
// 			<div style={{ borderRight : "1px solid white", padding:"1rem"}}>
// 			<FaPhoneAlt style={{marginRight:"0.5rem"}} />
// 			<span>Contact us</span>
// 			</div>
// 			<div style={{ borderRight : "1px solid white", padding:"1rem"}}>
// 			<FaInfoCircle style={{marginRight:"0.5rem"}} />
// 			<span>About us</span>
// 			</div>

// 			<div style={{ padding:"1rem"}}>
// 				<FaQuestion style={{marginRight:"0.5rem"}} />
// 			<span>Help FAQS</span>
// 			</div>


// const pages = ['Products', 'Pricing', 'Blog'];
// const navRoutes = ['/facultyProfile', 'facultyDashboard', 'collegeProfile']

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="fixed"  style={{ marginTop: "95px", height: "40px" }}>
//       <Container>
//         <Toolbar>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 style= {{ marginBottom: '20px', color: 'white', display: 'block' }}
//                 component={Link}
// 		to={navRoutes.map((page) => )}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
