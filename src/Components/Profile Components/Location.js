import React from "react";
import { TextInput, NumberInput } from "@mantine/core";

function Location() {
	return (
		<>
			<div>
				<h2>Location Details</h2>
			</div>
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
		</>
	);
}

export default Location;
