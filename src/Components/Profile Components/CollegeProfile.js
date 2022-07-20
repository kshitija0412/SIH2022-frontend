import React from "react";
import { useState } from "react";
import { Stepper, Button, TextInput, NumberInput, Select } from "@mantine/core";
import { ChevronDown } from "tabler-icons-react";
import Location from "./Location";
import Affiliation from "./Affiliation";

function CollegeProfile() {
	const [active, setActive] = useState(1);
	const nextStep = () =>
		setActive((current) => (current < 5 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<>
			<div>
				<h1>College Profile</h1>
			</div>

			<Stepper
				active={active}
				onStepClick={setActive}
				breakpoint="sm"
				iconSize={29}
				size="xs"
			>
				<Stepper.Step label="Basic Details" allowStepSelect={active > 0}>
					<div>
						<h2>Basic Details</h2>
					</div>

					<div id="TextField">
						<TextInput placeholder="Name" label="Insititute Name" required />
					</div>
					<div id="NumberField">
						<NumberInput hideControls label="Year of Establishment" required />
					</div>
				</Stepper.Step>
				<Stepper.Step label="Location Details" allowStepSelect={active > 1}>
					<Location />
				</Stepper.Step>
				<Stepper.Step label="Affiliation Details" allowStepSelect={active > 2}>
					<Affiliation />
				</Stepper.Step>

				<Stepper.Step label="Course Details" allowStepSelect={active > 3}>
					<div>
						<h2>Course Details</h2>
					</div>

					<div id="NumberField">
						<NumberInput hideControls label="No of Streams" required />
					</div>
					<div id="TextField">
						<TextInput
							placeholder="Eg: Computer Science"
							label="Stream"
							required
						/>
					</div>
					<div id="TextField">
						<TextInput label="Intake per Stream" required />
					</div>
					<div id="NumberField">
						<NumberInput hideControls label="Number of Teaching Faculty" required />
					</div>
					<div id="TextField">
						<TextInput
							placeholder="Eg: Assistant Professor"
							label="Distribution of Faculty based on designation"
							required
						/>
					</div>
				</Stepper.Step>

				<Stepper.Step label="Social Media Links" allowStepSelect={active > 4}>
					<div>
						<h2>Social Media Links</h2>
					</div>
					<div id="TextField">
						<TextInput
							placeholder="Enter your LinkedIN profile url"
							label="LinkedIN"
							required
						/>
					</div>

					<div id="TextField">
						<TextInput
							placeholder="Enter your FaceBook profile url"
							label="FaceBook"
						/>
					</div>
					<div id="TextField">
						<TextInput
							placeholder="Enter your Instagram profile url"
							label="Instagram"
						/>
					</div>
				</Stepper.Step>

				<Stepper.Completed>
					<h3>Thank you for the submission!</h3>
					Click back button to get to previous step
				</Stepper.Completed>
			</Stepper>

			<div className="flex-container">
				<div>
					<Button variant="outline" onClick={prevStep}>
						Back
					</Button>
				</div>
				<div>
					<Button variant="outline" onClick={nextStep}>
						Next step
					</Button>
				</div>
			</div>
		</>
	);
}

export default CollegeProfile;
