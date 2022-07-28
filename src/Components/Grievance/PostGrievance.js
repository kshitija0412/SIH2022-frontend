import React from "react";
import {
	Textarea,
	TextInput,
	NumberInput,
	Box,
	Select,
	Button,
} from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

function PostGrievance() {
	return (
		<>
			<Box
				className="boxl"
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
				<div>
					<h2>Login</h2>
				</div>
				<div id="TextField">
					<TextInput label="Full name" required />
				</div>
				<div id="NumberField">
					<NumberInput hideControls label="Contact Number" required />
				</div>
				<div id="TextField">
					<TextInput label="Email Address" required />
				</div>
			</Box>

			<Box
				className="boxg"
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
				<div>
					<h2>Grievance Details</h2>
				</div>
				<div id="TextField">
					<TextInput label="Grievance Against" required />
				</div>
				<div id="TextField">
					<Select
						label="Grievance Category"
						placeholder="Please Select"
						rightSection={<ChevronDown size={14} />}
						rightSectionWidth={30}
						styles={{ rightSection: { pointerEvents: "none" } }}
						data={[
							"Please Select",
							"False Credentials",
							"Prior Convictions",
							"Other",
						]}
						required
					/>
				</div>
				<div id="TextField">
					<Textarea label="Grievance Description" required />
				</div>
			</Box>
			<div className="flex-container">
				<Button>Post</Button>
			</div>
		</>
	);
}

export default PostGrievance;
