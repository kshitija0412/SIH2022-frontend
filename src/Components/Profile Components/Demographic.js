import React from "react";
import { TextInput } from "@mantine/core";
import { NumberInput } from "@mantine/core";

function Demographic() {
	return (
		<>
			<div>
				<h2>Demographic Details</h2>
			</div>
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
		</>
	);
}

export default Demographic;
