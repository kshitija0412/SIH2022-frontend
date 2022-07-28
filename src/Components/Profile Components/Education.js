import React from "react";
import {
	TextInput,
	Select,
	NumberInput,
	Box,
	MantineProvider
} from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { DatePicker } from "@mantine/dates";

// import DocDropzone from "./DocDropzone";
// import DeleteModal from "./DeleteModal";
// import DelModal from "./DelModal";

function Education() {
	return (
		<>
			<div>
				<h2>Education Details</h2>
			</div>

			<Box
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[6]
							: theme.colors.gray[0],
					textAlign: "center",
					padding: theme.spacing.xl,
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
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						breakpoints: {
							xs: 200,
							sm: 400,
							md: 700,
							lg: 1200,
							xl: 1800,
						},
					}}
				>
				
				</MantineProvider>

				<div id="TextField">
				<Select
					label="Qualification Level"
					placeholder="Please Select"
					rightSection={<ChevronDown size={14} />}
					rightSectionWidth={30}
					styles={{ rightSection: { pointerEvents: "none" } }}
					data={[
						"Please Select",
						"SSC",
						"HSC",
						"Graduate",
						"Post-Graduate",
						"Doctorate",
						"Post-Doctorate",
					]}
					required
				/>
			</div>
			<div id="TextField">
				<Select
					label="Stream"
					placeholder="Please Select"
					rightSection={<ChevronDown size={14} />}
					rightSectionWidth={30}
					styles={{ rightSection: { pointerEvents: "none" } }}
					data={[
						"Please Select",
						"Computer Science Engineering",
						"Information Technology Engineering",
						"Electronics and Telecommunication Engineering",
						"Electronics Engineering",
						"Biomedical Engineering",
					]}
					required
				/>
				</div>
				<div id="TextField">
				<TextInput label="Completed" required />
				</div> 

				<div id="TextField">
				<TextInput label="Institute State" required />
				</div> 
				<div id="TextField">
				<TextInput label="Institute District" required />
				</div> 
				<div id="TextField">
				<TextInput label="Institute Taluka" required />
				</div> 
				<div id="TextField">
				<TextInput label="College Name/School Name" required />
				</div> 
				<div id="TextField">
				<Select
					label="Course"
					placeholder="Please Select"
					rightSection={<ChevronDown size={14} />}
					rightSectionWidth={30}
					styles={{ rightSection: { pointerEvents: "none" } }}
					data={[
						"Please Select",
						"Computer Science Engineering",
						"Information Technology Engineering",
						"Electronics and Telecommunication Engineering",
						"Electronics Engineering",
						"Biomedical Engineering",
					]}
					required
				/>
				</div>
				<div id="TextField">
				<TextInput label="Board/University" required />
				</div>

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
				{/* <div id="TextField">
					Upload your Marksheet
					<DocDropzone />
				</div>
				<div id="TextField">
					Delete your file
					<DeleteModal />
				</div> */}
			</Box>
			{/* <EducationDisplay /> */}
		</>
	);
}

export default Education;
