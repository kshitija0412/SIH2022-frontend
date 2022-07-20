import React from "react";
import { ChevronDown } from "tabler-icons-react";
import { TextInput, Select } from "@mantine/core";

function Affiliation() {
	return (
		<>
			<div>
				<h2>Type of Affiliation</h2>
			</div>
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
		</>
	);
}

export default Affiliation;
