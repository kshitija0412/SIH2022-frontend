import React from "react";
import { TextInput, Textarea, Table } from "@mantine/core"

function PapersPublished() {
	return (
		<div>
			<div>
				<h2>Papers Published</h2>
			</div>
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
		</div>
	);
}

export default PapersPublished;
