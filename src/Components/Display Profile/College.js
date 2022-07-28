import React from "react";
import VIT from "./VIT.jpg";
import { Text, Box, Image } from "@mantine/core";

function College() {
	return (
		<>
		 <Box
		 className="box"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
    >
			<div>
				<h2>Vidyalankar Institute of Technology</h2>
			</div>
				<div id="TextField">
					{/* <Text>Institute Name: </Text> */}
					<Text>Year of Establishment: </Text>
				</div>

				<Image
					width={400}
					fit="contain"
					src={VIT}
					alt="Vidyalankar Institute of Technology"
				/>
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
				<h2>Type of Affiliation</h2>
			</div>
			<div id="TextField">
				<Text>Type of Affiliation: </Text>
				<Text>Affiliated with: </Text>
				<hr></hr>
			</div>

			<div>
				<h2>Course Details</h2>
			</div>
			<div id="TextField">
				<Text>No of Streams: </Text>
				<Text>Stream: </Text>
				<Text>Intake per Stream: </Text>
				<Text>Number of Teaching Faculty: </Text>
				<Text>Distribution of Faculty based on designation: </Text>
				<hr></hr>
			</div>

			<div>
				<h2>Social Media Links</h2>
			</div>
			<div id="TextField">
				<Text>LinkedIN: </Text>
				<Text>FaceBook: </Text>
				<Text>Instagram: </Text>
				<hr></hr>
			</div>
    </Box>
		</>
	);
}

export default College;
