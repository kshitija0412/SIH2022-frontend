import React from "react";
import { ArrowNarrowUp } from "tabler-icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition, MantineProvider } from "@mantine/core";

function ScrollAffix() {
	const [scroll, scrollTo] = useWindowScroll();

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
				<Affix position={{ bottom: 95, right: 15 }}>
					<Transition transition="slide-up" mounted={scroll.y > 0}>
						{(transitionStyles) => (
							<Button
								leftIcon={<ArrowNarrowUp size={22} />}
								style={transitionStyles}
								onClick={() => scrollTo({ y: 0 })}
								color="dark-teal"
								position= "sticky"
							>
								Scroll to top
							</Button>
						)}
					</Transition>
				</Affix>
			</MantineProvider>
		</>
	);
}

export default ScrollAffix;
