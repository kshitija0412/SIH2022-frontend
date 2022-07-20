import React from "react";
import { useState } from "react";
import {
	Stepper,
	Button,
	TextInput } from "@mantine/core";
import Demographic from "./Demographic";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import PapersPublished from "./PapersPublished";
import Location from "./Location";

function FacultyProfile() {
	const [active, setActive] = useState(1);
	const nextStep = () =>
		setActive((current) => (current < 8 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<>
			<div>
				<h1>Faculty Profile</h1>
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
						<TextInput placeholder="First Name" label="First name" required />
					</div>
					<div id="TextField">
						<TextInput placeholder="Middle Name" label="Middle name" required />
					</div>

					<div id="TextField">
						<TextInput placeholder="Last Name" label="Last name" required />
					</div>
				</Stepper.Step>
				<Stepper.Step label="Location Details" allowStepSelect={active > 1}>
					<Location />
				</Stepper.Step>
				<Stepper.Step label="Demographic Details" allowStepSelect={active > 2}>
					<Demographic />
				</Stepper.Step>
				<Stepper.Step label="Educational Details" allowStepSelect={active > 3}>
					<Education />
				</Stepper.Step>
				<Stepper.Step label="Experience" allowStepSelect={active > 4}>
					<Experience />
				</Stepper.Step>
				<Stepper.Step label="Skills" allowStepSelect={active > 5}>
					<div>
						<h2>Skills</h2>
					</div>
					<Skills />
				</Stepper.Step>

				<Stepper.Step label="Social Media Links" allowStepSelect={active > 6}>
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
							placeholder="Enter your Github profile username"
							label="Github"
						/>
					</div>
					<div id="TextField">
						<TextInput
							placeholder="Enter your ResearchGate/Google Scholar profile url"
							label="ResearchGate/Google Scholar Profile"
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
				<Stepper.Step label="Papers Published" allowStepSelect={active > 7}>
					<PapersPublished />
				</Stepper.Step>
				<Stepper.Completed>
					<h3>Thank you for the submission!</h3>
					Click back button to get to previous step
				</Stepper.Completed>
			</Stepper>

			<div className="flex-container">
				<div>
					<Button variant="outline" color="black" onClick={prevStep}>
						Back
					</Button>
				</div>
				<div>
					<Button variant="outline" color="black" onClick={nextStep}>
						Next step
					</Button>
				</div>
			</div>
		</>
	);
}

export default FacultyProfile;
