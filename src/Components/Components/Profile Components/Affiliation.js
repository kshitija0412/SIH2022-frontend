import React from "react";
import { ChevronDown } from "tabler-icons-react";
import { TextInput, Select, Box } from "@mantine/core";

function Affiliation() {
	return (
		<>
			<div>
				<h2 style= {{fontSize: "1.5rem", marginTop: "1rem"}}>Type of Affiliation</h2>
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
				<Select
					label="Type of Affiliation"
					placeholder="Please Select"
					rightSection={<ChevronDown size={14} />}
					rightSectionWidth={30}
					styles={{ rightSection: { pointerEvents: "none" } }}
					data={[
						"Autonomous College",
						"Affiliated College",
						"Deemed University",
						"State University",
						"Private University",
					]}
					required
				/>
			</div>
			<div id="TextField">
				<TextInput
					placeholder="Eg: Mumbai University"
					label="Affiliated with"
					required
				/>
			</div>
			</Box>
		</>
	);
}

export default Affiliation;
