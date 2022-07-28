import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TrackGrievance(gid, date, category, action, status) {
	return {
		gid,
		date,
		category,
		action,
		status,
	};
}
const rows = [
	TrackGrievance(
		"F1234UID",
		"14/06/2022",
		"False Credentials",
		"Profile under verification",
		"Under scrutiny"
	),
	TrackGrievance(
		"F1458UID",
		"18/08/2021",
		"Prior Convictions",
		"Found guilty and dismissed",
		"Closed"
	),
	TrackGrievance(
		"F2657UID",
		"23/09/2020",
		"False Credentials",
		"Profile verified",
		"Closed"
	),
];

export default function BasicTable() {
	return (
		<>
			<div>
				<h2>Track Grievance</h2>
			</div>

			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Grievance ID </TableCell>
							<TableCell>Date of issue</TableCell>
							<TableCell>Grievance Category</TableCell>
							<TableCell>Action Taken</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.name}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell>{row.gid}</TableCell>
								<TableCell>{row.date}</TableCell>
								<TableCell>{row.category}</TableCell>
								<TableCell>{row.action}</TableCell>
								<TableCell>{row.status}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

