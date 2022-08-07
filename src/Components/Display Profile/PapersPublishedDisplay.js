import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function EducationDisplay(no, year, domain, journal, author, description) {
	return {
		no,
		year,
		domain,
		journal,
		author,
		description
	};
}

const rows = [
	EducationDisplay(
		1,
		"2016",
		"Machine Learning",
		"IEEE INDICON",
		"XYZ, ABC",
		"fsfksjdgjnfdkgnsidkfndsfidinfdisfnd"
	),
	EducationDisplay(
		2,
		"2016",
		"VLSI",
		"IEEE INDICON",
		"XYZ, ABC",
		"fsfksjdgjnfdkgnsidkfndsfidinfdisfnd"
	),
	EducationDisplay(
		3,
		"2016",
		"Image Processing",
		"IEEE INDICON",
		"XYZ, ABC",
		"fsfksjdgjnfdkgnsidkfndsfidinfdisfnd"
	),
];

export default function BasicTable() {
	return (
		<>
			<div>
				<h2>Papers Published</h2>
			</div>

			<TableContainer component={Paper} className="displayTable">
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell><b>Sr. No. </b></TableCell>
							<TableCell><b>Publication Year</b></TableCell>
							<TableCell><b>Domain</b></TableCell>
							<TableCell><b>Journal/Conference</b></TableCell>
							<TableCell><b>Co-Authors</b></TableCell>
							<TableCell><b>Description</b></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								
								<TableCell>{row.no}</TableCell>
								<TableCell>{row.year}</TableCell>
								<TableCell>{row.domain}</TableCell>
								<TableCell>{row.journal}</TableCell>
								<TableCell>{row.author}</TableCell>
								<TableCell>{row.description}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

// import React from "react";
// import { TextInput, Textarea, Table, Box } from "@mantine/core";

// function PapersPublishedDisplay() {
// 	const elements = [
// 		{
// 			No: 1,
// 			Year: 2016,
// 			Domain: "Machine Learning",
// 			JournalConference: "IEEE INDICON",
// 			Coauthors: "XYZ,ABC",
// 			Description: "fsfksjdgjnfdkgnsidkfndsfidinfdisfnd",
// 		},
// 		{
// 			No: 1,
// 			Year: 2020,
// 			Domain: "VLSI",
// 			JournalConference: "IEEE INDICON",
// 			Coauthors: "XYZ,ABC",
// 			Description: "fsfksjdgjnfdkgnsidkfndsfidinfdisfnd",
// 		},
// 		{
// 			No: 1,
// 			Year: 2021,
// 			Domain: "Image Processing",
// 			JournalConference: "IEEE INDICON",
// 			Coauthors: "XYZ,ABC",
// 			Description: "fsfksjdgjnfdkgnsidkfndsfidinfdisfnd",
// 		},
// 	];
// 	const rows = elements.map((element) => (
// 		<tr key={element.name}>
// 			<td>{element.No}</td>
// 			<td>{element.Year}</td>
// 			<td>{element.Domain}</td>
// 			<td>{element.JournalConference}</td>
// 			<td>{element.Coauthors}</td>
// 			<td>{element.Description}</td>
// 			<td>{element.Delete}</td>
// 		</tr>
// 	));
// 	return (
// 		<>
// 			<div>
// 				<h2>Papers Published</h2>
// 			</div>
// 			{/* <Box
// 				sx={(theme) => ({
// 					backgroundColor:
// 						theme.colorScheme === "dark"
// 							? theme.colors.dark[6]
// 							: theme.colors.gray[0],
// 					textAlign: "center",
// 					padding: theme.spacing.xl,
// 					borderRadius: theme.radius.md,
// 					cursor: "pointer",

// 					"&:hover": {
// 						backgroundColor:
// 							theme.colorScheme === "dark"
// 								? theme.colors.dark[5]
// 								: theme.colors.gray[1],
// 					},
// 				})}
// 			>
// 				<Table>
// 					<thead>
// 						<tr>
// 							<th>Sr. No. </th>
// 							<th>Publication Year</th>
// 							<th>Domain</th>
// 							<th>Journal/Conference</th>
// 							<th>Co-Authors</th>
// 							<th>Description</th>
// 							<th>Delete</th>
// 						</tr>
// 					</thead>
// 					<tbody>{rows}</tbody>
// 				</Table>
// 			</Box> */}
// 			<Table>
// 				<thead>
// 					<tr>
// 						<th>Sr. No. </th>
// 						<th>Publication Year</th>
// 						<th>Domain</th>
// 						<th>Journal/Conference</th>
// 						<th>Co-Authors</th>
// 						<th>Description</th>
// 						<th>Delete</th>
// 					</tr>
// 				</thead>
// 				<tbody>{rows}</tbody>
// 			</Table>
// 		</>
// 	);
// }

// export default PapersPublishedDisplay;
