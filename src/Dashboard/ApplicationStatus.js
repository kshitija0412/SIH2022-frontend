import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Dashboard.css";

function ApplicationStatus(aid, date, post, org, status) {
  return {
    aid, date, post, org, status
  };
}

const rows = [
	ApplicationStatus(
		"A1234VID",
		"14/06/2021",
		"Assistant Professor",
		"Vidyalankar Institute of Technology",
		"Not selected"
	),
  ApplicationStatus(
		"A2456SID",
		"20/07/2022",
		"Academic Coordinator",
		"Sardar Patel Institute of Technology",
		"In Progress"
	),
    ]

    export default function BasicTable() {
        return (
            <>
                <div>
                    <h2>Application Status</h2>
                </div>
    
                <TableContainer component={Paper} className="Table">
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Application ID </b></TableCell>
                                <TableCell><b>Date of Application</b></TableCell>
                                <TableCell><b>Post Applied for</b></TableCell>
                                <TableCell><b>Institute Name</b></TableCell>
                                <TableCell><b>Status</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell>{row.aid}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.post}</TableCell>
                                    <TableCell>{row.org}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        );
    }