import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function EducationDisplay(
	no,
	qualifications,
	stream,
	course,
	institute,
	board,
	admission,
	passing,
	percentage
) {
	return {
		no,
		qualifications,
		stream,
		course,
		institute,
		board,
		admission,
		passing,
		percentage,
	};
}

const rows = [
	EducationDisplay(
		1,
		"BE",
		"Engineering",
		"EXTC",
		"VIT",
		"MU",
		"14/07/2019",
		"14/06/2023",
		"82"
	),
	EducationDisplay(
		2,
		"BE",
		"Engineering",
		"CMPN",
		"SPIT",
		"MU",
		"14/07/2019",
		"14/06/2023",
		"82"
	),
	EducationDisplay(
		3,
		"BE",
		"Engineering",
		"INFT",
		"RAIT",
		"MU",
		"14/07/2019",
		"14/06/2023",
		"82"
	),
];

export default function BasicTable() {
	return (
		<>
			<div>
				<h2>Education Details</h2>
			</div>

			<TableContainer component={Paper} className="displayTable">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								<b>Sr. No. </b>
							</TableCell>
							<TableCell>
								<b>Qualifications</b>
							</TableCell>
							<TableCell>
								<b>Stream</b>
							</TableCell>
							<TableCell>
								<b>Course</b>
							</TableCell>
							<TableCell>
								<b>Institute</b>
							</TableCell>
							<TableCell>
								<b>Board/University</b>
							</TableCell>
							<TableCell>
								<b>Admission Year</b>
							</TableCell>
							<TableCell>
								<b>Passing Year</b>
							</TableCell>
							<TableCell>
								<b>Percentage/CGPA</b>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell>{row.no}</TableCell>
								<TableCell>{row.qualifications}</TableCell>
								<TableCell>{row.stream}</TableCell>
								<TableCell>{row.course}</TableCell>
								<TableCell>{row.institute}</TableCell>
								<TableCell>{row.board}</TableCell>
								<TableCell>{row.admission}</TableCell>
								<TableCell>{row.passing}</TableCell>
								<TableCell>{row.percentage}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

// import React from "react";
// import {
// 	TextInput,
// 	Table,
// 	Select,
// 	NumberInput,
// 	Box,
// 	MantineProvider,
// } from "@mantine/core";
// import { ChevronDown } from "tabler-icons-react";
// import { DatePicker } from "@mantine/dates";

// function EducationDisplay() {
// 	const elements = [
// 		{
// 			No: 1,
// 			Qualifications: "BE",
// 			Stream: "Engineering",
// 			Course: "EXTC",
// 			Institute: "VIT",
// 			Board: "MU",
// 			Admission: "14/07/2019",
// 			Passing: "14/06/2023",
// 			Percentage: "82",
// 		},
// 		{
// 			No: 2,
// 			Qualifications: "BE",
// 			Stream: "Engineering",
// 			Course: "CMPN",
// 			Institute: "SPIT",
// 			Board: "MU",
// 			Admission: "14/07/2019",
// 			Passing: "14/06/2023",
// 			Percentage: "82",
// 		},
// 		{
// 			No: 3,
// 			Qualifications: "BE",
// 			Stream: "Engineering",
// 			Course: "EXTC",
// 			Institute: "RAIT",
// 			Board: "MU",
// 			Admission: "14/07/2019",
// 			Passing: "14/06/2023",
// 			Percentage: "82",
// 		},
// 	];
// 	const rows = elements.map((element) => (
// 		<tr key={element.name}>
// 			<td>{element.No}</td>
// 			<td>{element.Qualifications}</td>
// 			<td>{element.Stream}</td>
// 			<td>{element.Course}</td>
// 			<td>{element.Institute}</td>
// 			<td>{element.Board}</td>
// 			<td>{element.Admission}</td>
// 			<td>{element.Passing}</td>
// 			<td>{element.Percentage}</td>
// 			<td>{element.Document}</td>
// 			<td>{element.Delete}</td>
// 		</tr>
// 	));

// 	return (
// 		<>
// 			<div>
// 				<h2>Education Details</h2>
// 			</div>

// 			<Table>
// 				<thead>
// 					<tr>
// 						<th>Sr. No. </th>
// 						<th>Qualifications</th>
// 						<th>Stream</th>
// 						<th>Course</th>
// 						<th>Institute</th>
// 						<th>Board/University</th>
// 						<th>Admission Year</th>
// 						<th>Passing Year</th>
// 						<th>Percentage/CGPA</th>
// 						<th>Document</th>
// 						<th>Delete</th>
// 					</tr>
// 				</thead>
// 				<tbody>{rows}</tbody>
// 			</Table>
// 		</>
// 	);
// }

// export default EducationDisplay;
