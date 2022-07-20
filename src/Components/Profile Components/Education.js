import React from "react";
import { TextInput, Table, Select, NumberInput } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { DatePicker } from "@mantine/dates";
// import DelModal from "./DelModal";

function Education() {
	const elements = [
		{
			No: 1,
			Qualifications: "BE",
			Stream: "Engineering",
			Course: "EXTC",
			Institute: "VIT",
			Board: "MU",
			Admission: "14/07/2019",
			Passing: "14/06/2023",
			Percentage: "82",
		},
		{
			No: 2,
			Qualifications: "BE",
			Stream: "Engineering",
			Course: "CMPN",
			Institute: "SPIT",
			Board: "MU",
			Admission: "14/07/2019",
			Passing: "14/06/2023",
			Percentage: "82",
		},
		{
			No: 3,
			Qualifications: "BE",
			Stream: "Engineering",
			Course: "EXTC",
			Institute: "RAIT",
			Board: "MU",
			Admission: "14/07/2019",
			Passing: "14/06/2023",
			Percentage: "82",
		},
	];
	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{element.No}</td>
			<td>{element.Qualifications}</td>
			<td>{element.Stream}</td>
			<td>{element.Course}</td>
			<td>{element.Institute}</td>
			<td>{element.Board}</td>
			<td>{element.Admission}</td>
			<td>{element.Passing}</td>
			<td>{element.Percentage}</td>
			<td>{element.Document}</td>
			<td>{element.Delete}</td>
		</tr>
	));

	return (
		<>
			<div>
				<h2>Education Details</h2>
			</div>
			<div className="flex-edu">
				<div id="TextField">
					<Select
						label="Mode"
						placeholder="Please Select"
						rightSection={<ChevronDown size={14} />}
						rightSectionWidth={30}
						styles={{ rightSection: { pointerEvents: "none" } }}
						data={["Please Select", "Regular", "Distance/Correspondence"]}
						required
					/>
				</div>
				<div id="TextField">
					<DatePicker label="Admission Year" required />
				</div>
				<div id="TextField">
					<DatePicker label="Passing Year" required />
				</div>
				<div id="TextField">
					<Select
						label="Result"
						placeholder="Select"
						rightSection={<ChevronDown size={14} />}
						rightSectionWidth={30}
						styles={{ rightSection: { pointerEvents: "none" } }}
						data={["Select", "Passed"]}
						required
					/>
				</div>
				<div id="NumberField">
					<NumberInput hideControls label="Percentage" />
				</div>
				<div id="NumberField">
					<NumberInput label="Attempts" />
				</div>
				<div>
					{/* <DelModal /> */}
				</div>
			</div>

			<Table>
				<thead>
					<tr>
						<th>Sr. No. </th>
						<th>Qualifications</th>
						<th>Stream</th>
						<th>Course</th>
						<th>Institute</th>
						<th>Board/University</th>
						<th>Admission Year</th>
						<th>Passing Year</th>
						<th>Percentage/CGPA</th>
						<th>Document</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</>
	);
}

export default Education;
