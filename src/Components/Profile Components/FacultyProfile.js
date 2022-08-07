import React from "react";
import { useState } from "react";
import { Stepper, Button, TextInput, Box, MantineProvider } from "@mantine/core";
import Demographic from "./Demographic";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import PapersPublished from "./PapersPublished";
import Location from "./Location";
import "./Profile.css";

function FacultyProfile() {
	const [active, setActive] = useState(0);
	const nextStep = () =>
		setActive((current) => (current < 8 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<> 
			<div>
				<h1>Faculty Profile</h1>
			</div>
			<MantineProvider
				theme={{
					colors: {
						'teal': [ '#9de2d6', '#89dcce', '#76d6c6', '#62d0be', '#4ecab6', '#3bc4ad', '#6BD3C2'],
						'dark-teal': ['#50af9f', '#489d8f', '#408c7f', '#387a6f', '#30695f', '#28574f', '#3D8579'],
					},
				}}
			>
			<Stepper
				active={active}
				onStepClick={setActive}
				breakpoint="sm"
				iconSize={29}
				size="xs"
				color="dark-teal"
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
						<TextInput placeholder="First Name" label="First name" required />
					</div>
					<div id="TextField">
						<TextInput placeholder="Middle Name" label="Middle name" required />
					</div>

					<div id="TextField">
						<TextInput placeholder="Last Name" label="Last name" required />
					</div>

					<div id="TextField">
					<TextInput label="Upload your image:" required />
					</div>
					</Box>
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
					<Skills />
				</Stepper.Step>

				<Stepper.Step label="Social Media Links" allowStepSelect={active > 6}>
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
					</Box>
				</Stepper.Step>

				<Stepper.Step label="Papers Published" allowStepSelect={active > 7}>
					<PapersPublished />
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
				{ active < 8 ? <div> <Button color="dark-teal" onClick={nextStep}> Next step
					</Button> </div> : <br /> }
			
				
			</div>
			</MantineProvider>
		</>
	);
}

export default FacultyProfile;
