import React from "react";
import { TextInput, Select, Textarea, Text } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { DatePicker } from "@mantine/dates";
import DocDropzone from "./DocDropzone";

function Experience() {
	return (
		<>
			<div>
				<h2>Experience Details</h2>
			</div>
			<div id="TextField">
				<TextInput placeholder="Organization" label="Company Name" required />
			</div>
			<div id="TextField">
				<TextInput
					placeholder="Eg: Assistant Professor"
					label="Position"
					required
				/>
			</div>
			<div id="TextField">
				<Select
					label="Employment Type"
					placeholder="Please Select"
					rightSection={<ChevronDown size={14} />}
					rightSectionWidth={30}
					styles={{ rightSection: { pointerEvents: "none" } }}
					data={["Please Select", "Full-time", "Part-time", "Trainee"]}
					required
				/>
			</div>
			<div className="flex-date">
				<div id="TextField">
					<DatePicker label="Start date" required />
				</div>
				<div id="TextField">
					<DatePicker label="End date" required />
				</div>
			</div>
			<div id="TextField">
				<TextInput label="Location" />
			</div>
			<div id="TextField">
				<TextInput placeholder="If any" label="Achievements" />
			</div>
			<div id="TextField">
				<Textarea label="Description" required />
			</div>
			<div id="TextField">
				<Text>Upload your Resume</Text>
				<DocDropzone />
			</div>
		</>
	);
}

export default Experience;
