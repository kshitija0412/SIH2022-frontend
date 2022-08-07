import React from "react";
import { useState } from "react";
import { MultiSelect, Box } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";

function Skills() {
	const [techdata, settechData] = useState([
		"Python",
		"C++",
		"Java",
		"JavaScript",
	]);
	const [softdata, setsoftData] = useState([
		"Leadership",
		"Communication",
		"Adaptibility",
		"Problem-Solving",
	]);

	return (
		<>
			<div>
				<h2>Skills</h2>
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
				style= {{padding: "5px 24px 24px 24px"}} 
			>
				<div id="TextField">
					<MultiSelect
						label="Technical Skills"
						data={techdata}
						placeholder="Please Select/Add New Skills"
						searchable
						creatable
						getCreateLabel={(query) => `+ Create ${query}`}
						onCreate={(query) => settechData((current) => [...current, query])}
						rightSection={<ChevronDown size={14} />}
						rightSectionWidth={30}
						styles={{ rightSection: { pointerEvents: "none" } }}
						required
					/>
				</div>
				<div id="TextField">
					<MultiSelect
						label="Soft Skills"
						data={softdata}
						placeholder="Please Select/Add New Skills"
						searchable
						creatable
						getCreateLabel={(query) => `+ Create ${query}`}
						onCreate={(query) => setsoftData((current) => [...current, query])}
						rightSection={<ChevronDown size={14} />}
						rightSectionWidth={30}
						styles={{ rightSection: { pointerEvents: "none" } }}
						required
					/>
				</div>
			</Box>
		</>
	);
}
export default Skills;
