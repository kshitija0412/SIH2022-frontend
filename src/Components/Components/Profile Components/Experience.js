import React from "react";
import { TextInput, Select, Textarea, Text, Box } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import { DatePicker } from "@mantine/dates";
import UploadDelete from "./UploadDelete";

function Experience() {
	return (
		<>
			<div>
				<h2 style= {{fontSize: "1.5rem", marginTop: "1rem"}}>Experience Details</h2>
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

					"&:hover": {
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.dark[5]
								: theme.colors.gray[1],
					},
				})}
				style={{ padding: "5px 24px 24px 24px" }}
			>
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
					<Text
						style={{
							display: "inline-block",
							marginBottom: "4px",
							fontSize: "14px",
							fontWeight: "500",
							color: "#212529",
							wordBreak: "break-word",
							cursor: "default",
						}}
					>
						Upload your resume below
					</Text>
					<UploadDelete />
				</div>
			</Box>
		</>
	);
}

export default Experience;
