import * as React from "react";
import { Box } from "@mantine/core";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function createData(Department, StudentIntake, TeachingFaculty) {
  return {
    Department,
    StudentIntake,
    TeachingFaculty,

    facultyextc: [
      {
        name: "Dr. Dhananjay Patel",
        designation: "Associate Professor",
        qualification: "PostDoc - Optical communications",
        age: 36,
      },
      {
        name: "Prof. Beena Ballal",
        designation: "Assistant Professor",
        qualification: "ME - Electronics and Telecommunication",
        age: 37,
      },
    ],

    facultycs: [
        {
          name: "Dr. Sachin Bojewar",
          designation: "Head of Department",
          qualification: "PhD - Computer Science",
          age: 40,
        },
      ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.Department}
        </TableCell>
        <TableCell>{row.StudentIntake}</TableCell>
        <TableCell>{row.TeachingFaculty}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="Department Details">
                <TableHead>
                  <TableRow>
                  <TableCell><b>Professor Name</b></TableCell>
                    <TableCell><b>Designation</b></TableCell>
                    <TableCell><b>Qualification</b></TableCell>
                    <TableCell><b>Age</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.facultyextc.map((facultyextcRow) => (
                    <TableRow key={facultyextcRow.name}  sx={{ "& > *": { borderBottom: "unset" } }}>
                      <TableCell component="th" scope="row">
                        {facultyextcRow.name} 
                      </TableCell>
                      <TableCell>{facultyextcRow.designation}</TableCell>
                      <TableCell>{facultyextcRow.qualification}</TableCell>
                      <TableCell>{facultyextcRow.age}</TableCell>
                    </TableRow>
                  ))}       

                  {row.facultycs.map((facultycsRow) => (
                    <TableRow key={facultycsRow.name}>
                      <TableCell component="th" scope="row">
                        {facultycsRow.name}
                      </TableCell>
                      <TableCell>{facultycsRow.designation}</TableCell>
                      <TableCell>{facultycsRow.qualification}</TableCell>
                      <TableCell>{facultycsRow.age}</TableCell>
                    </TableRow>
                  ))}      
                    
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
</React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     StudentIntake: PropTypes.number.isRequired,
//     TeachingFaculty: PropTypes.number.isRequired,
//     facultyextc: PropTypes.arrayOf(
//       PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         designation: PropTypes.string.isRequired,
//         qualifiction: PropTypes.string.isRequired,
//         age: PropTypes.number.isRequired,
//       })
//     ).isRequired,
//     facultycs: PropTypes.arrayOf(
//         PropTypes.shape({
//           name: PropTypes.string.isRequired,
//           designation: PropTypes.string.isRequired,
//           qualifiction: PropTypes.string.isRequired,
//           age: PropTypes.number.isRequired,
//         })
//       ).isRequired,
//     // name: PropTypes.string.isRequired,
//     // price: PropTypes.number.isRequired,
//     // protein: PropTypes.number.isRequired,
//   }),
// };

const rows = [
  createData("Electronics and Telecommunication", 150, 25)
];

const row2 = [
    createData("Computer Science",140,22)
];

  
export default function DepartmentDetails() {
  return (
    <>
      <h2 style= {{margin: "5rem 1rem 1rem 16.5rem"}}>Department Details</h2>
 <Box
				sx={(theme) => ({
					backgroundColor: "white",
					textAlign: "center",
					padding: theme.spacing.xl,
					borderRadius: theme.radius.md,})}
          style= {{margin: "0 1rem 5rem 14rem"}} 
			>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell style= {{fontSize: "1rem"}}><b>Department</b></TableCell>
              <TableCell style= {{fontSize: "1rem"}}><b>Student Intake</b></TableCell>
              <TableCell style= {{fontSize: "1rem"}}><b>Teaching Faculty</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.Department} row={row} />
            ))}
            {row2.map((row) => (
              <Row key={row.Department} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
</Box>
    </>
  );
}