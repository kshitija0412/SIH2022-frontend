import React from "react";
import "./Display.css";
import "../../App.css";
import { Text, Image, Box } from "@mantine/core";
import EducationDisplay from "./EducationDisplay";
import PapersPublishedDisplay from "./PapersPublishedDisplay";
import Professor from "./prof.png";

function Faculty() {
	return (
		<>
			<Box
				className="box"
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[6]
							: theme.colors.gray[0],
					textAlign: "center",
					padding: theme.spacing.xl,
					margin: theme.spacing.xxl,
					borderRadius: theme.radius.md,
					cursor: "pointer",

					"&:hover": {
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.dark[5]
								: theme.colors.gray[1],
					},
				})}
			>
				<div>
					<h2>Basic Details</h2>
				</div>

				<div className="displayImage">
					<div id="TextField">
						<Text>First Name: </Text>
						<Text>Middle Name: </Text>
						<Text>Last Name: </Text>
					</div>

					<Image
						width={100}
						height={75}
						fit="contain"
						src={Professor}
						alt="Faculty Image"
					/>
				</div>
				<hr></hr>

				<div>
					<h2>Location Details</h2>
				</div>
				<div id="TextField">
					<Text>State: </Text>
					<Text>District: </Text>
					<Text>City: </Text>
					<Text>Pincode: </Text>
					<hr></hr>
				</div>

				<div>
					<h2>Demographic Details</h2>
				</div>
				<div id="TextField">
					<Text>Family Income: </Text>
					<Text>Religion: </Text>
					<Text>Caste: </Text>
					<Text>Sub-category: </Text>
					<hr></hr>
				</div>

				<EducationDisplay />

				<div>
					<h2>Experience Details</h2>
				</div>
				<div id="TextField">
					<Text>Company Name: </Text>
					<Text>Position: </Text>
					<Text>Employment Type: </Text>
					<Text>Start date: </Text>
					<Text>End date: </Text>
					<Text>Location: </Text>
					<Text>Achievements: </Text>
					<Text>Description: </Text>
					<hr></hr>
				</div>

				<div>
					<h2>Skills</h2>
				</div>
				<div id="TextField">
					<Text>Technical Skills: </Text>
					<Text>Soft Skills: </Text>
					<hr></hr>
				</div>

				<div>
					<h2>Social Media Links</h2>
				</div>
				<div id="TextField">
					<Text>LinkedIN: </Text>
					<Text>Github: </Text>
					<Text>ResearchGate/ Google Scholar Profile: </Text>
					<Text>FaceBook: </Text>
					<Text>Instagram: </Text>
					<hr></hr>
				</div>

				<PapersPublishedDisplay />
			</Box>
		</>
	);
}

export default Faculty;
