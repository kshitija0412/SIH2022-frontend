import React from "react";
import { TextInput, NumberInput, Box } from "@mantine/core";

function Location() {
	return (
		<>
			<div>
				<h2 style= {{fontSize: "1.5rem", marginTop: "1rem"}}>Location Details</h2>
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
				<TextInput placeholder="State" label="State" required />
			</div>
			<div id="TextField">
				<TextInput placeholder="District" label="District" required />
			</div>
			<div id="TextField">
				<TextInput placeholder="City" label="City" />
			</div>
			<div id="NumberField">
				<NumberInput hideControls label="Pincode" required />
			</div>
			</Box>
		</>
	);
}

export default Location;
