import React from "react";
import { useState } from "react";
import { Stepper, Button, TextInput, NumberInput, Box, MantineProvider } from "@mantine/core";
import Location from "./Location";
import Affiliation from "./Affiliation";
// import "./Profile.css";

function CollegeProfile() {
	const [active, setActive] = useState(1);
	const nextStep = () =>
		setActive((current) => (current < 6 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));
	// const [disabled, setDisabled] = useState(true);

	return (
		<>
		<MantineProvider
				theme={{
					colors: {
						'teal': [ '#9de2d6', '#89dcce', '#76d6c6', '#62d0be', '#4ecab6', '#3bc4ad', '#6BD3C2'],
						'dark-teal': ['#50af9f', '#489d8f', '#408c7f', '#387a6f', '#30695f', '#28574f', '#3D8579'],
					},
				}}
			>
			<div>
				<h1>College Profile</h1>
			</div>

			<Stepper
				active={active}
				onStepClick={setActive}
				breakpoint="sm"
				iconSize={29}
				size="xs"
				color='dark-teal'
			>
				<Stepper.Step label="Basic Details" allowStepSelect={active > 0}>
					<div>
						<h2>Basic Details</h2>
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
						<TextInput placeholder="Name" label="Insititute Name" required />
					</div>
					<div id="NumberField">
						<NumberInput hideControls label="Year of Establishment" required />
					</div>
					</Box>
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
						<NumberInput
							hideControls
							label="Number of Teaching Faculty"
							required
						/>
					</div>
					</Box>
				</Stepper.Step>

				<Stepper.Step label="Department Details" allowStepSelect={active > 4}>
					<div>
						<h2>Department Details</h2>
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
						<TextInput label="Department Name" required />
					</div>
					<div id="TextField">
						<TextInput label="Faculty Name" required />
					</div>
					<div id="TextField">
						<TextInput label="Designation" required />
					</div>
					<div id="TextField">
						<TextInput label="Qualification" required />
					</div>
					<div id="NumberField">
						<NumberInput hideControls label="Age" required />
					</div>
					</Box>
				</Stepper.Step>

				<Stepper.Step label="Social Media Links" allowStepSelect={active > 5}>
					<div>
						<h2>Social Media Links</h2>
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
					</Box>
				</Stepper.Step>

				<Stepper.Completed>
					<h3>Thank you for the submission!</h3>
					Click back button to go to previous step
				</Stepper.Completed>
			</Stepper>

			<div className="flex-container">
				<div>
					<Button variant="outline" color="dark-teal" onClick={prevStep}>
						Back
					</Button>
				</div>
				<div>
					<Button variant="outline" color="dark-teal" onClick={nextStep}>
						Next step
					</Button>
				</div>
			</div>
			</MantineProvider>
		</>
	);
}

export default CollegeProfile;
