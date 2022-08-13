import React from "react";
import { TextInput, NumberInput, Box } from "@mantine/core";

function Demographic() {
	return (
		<>
			<div>
				<h2 style= {{fontSize: "1.5rem", marginTop: "1rem"}}>Demographic Details</h2>
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
			<div id="NumberField">
				<NumberInput hideControls label="Family Income" required />
			</div>
			<div id="TextField">
				<TextInput label="Religion" required />
			</div>
			<div id="TextField">
				<TextInput label="Caste" required />
			</div>
			<div id="TextField">
				<TextInput label="Sub category" />
			</div>
			</Box>
		</>
	);
}

export default Demographic;
