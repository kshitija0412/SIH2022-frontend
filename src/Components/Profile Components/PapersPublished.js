import React from "react";
import { TextInput, Textarea, Box } from "@mantine/core";

function PapersPublished() {
	return (
		<>
			<div>
				<h2 style= {{fontSize: "1.5rem", marginTop: "1rem"}}>Papers Published</h2>
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
				style= {{padding: "5px 24px 24px 24px"}} 
			>
				<div id="TextField">
					<TextInput label="Year of Publication" required />
				</div>
				<div id="TextField">
					<TextInput
						placeholder=" E.g: Machine Learning, VLSI,etc"
						label="Domain"
						required
					/>
				</div>
				<div id="TextField">
					<TextInput
						placeholder="Please write full name of the journal/conference"
						label="Journal/Conference"
						required
					/>
				</div>
				<div id="TextField">
					<TextInput placeholder="" label="Co-Authors" required />
				</div>
				<div id="TextField">
					<Textarea
						placeholder=""
						label="Description of the paper"
						autosize
						minRows={3}
						required
					/>
				</div>
			</Box>
		</>
	);
}

export default PapersPublished;
