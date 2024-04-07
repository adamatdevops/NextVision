// import { useState } from 'react';
import { AppShell, Flex, Stack } from '@mantine/core';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { NavbarCard } from "./cards/NavbarCard";
import { MainCard } from "./cards/MainCard";
import classes from "./MantineAppShell.module.css";

/* Standard */
// Padding is:
// - 10 when viewport width is < theme.breakpoints.sm
// - 15 when viewport width is >= theme.breakpoints.sm and < theme.breakpoints.lg
// - theme.spacing.xl when viewport width is >= theme.breakpoints.lg

export function MantineAppShell() {

  return (
    <AppShell
			className={classes.AppShell}
			layout="default"
      header={{
				height: { base: 18, sm: 28, lg: 48 },
			//	offset: true
			}}
			footer={{
				height: { base: 18, sm: 28, lg: 48, breakpoint: "sm" },
			//	offset: true,
			}}
      navbar={{
        width: { sm: 120, lg: 220	},
        breakpoint: "sm"
      }}
			//withBorder={true}
			padding="md"
			visibleFrom="xs"
			style={{ preventOverflow: true }}
			//zIndex={100}
			//bg="lightBlue"
			//bg="linear-gradient(145deg, rgba(231, 75, 40, 0.955) 1%, rgba(205, 50, 104, 0.95) 100%)"
    >
		{/* <Stack
			justify="center"
			align="center"
			//bg="blue"
		>
			<MainCard/>
		</Stack> */}
		<AppShell.Header
		mt={0}
		mb={0}
		//my={0}
		ml={0}
		mr={0}
		bg="linear-gradient(145deg, rgb(224, 82, 50) 1%, rgba(205, 50, 104, 0.95) 100%)"
		>
			<Flex
			justify="center"
			align="center"
			wrap="wrap"
			gap="10"
			direction="row"
			>
				<HeaderMegaMenu/>
			</Flex>
		</AppShell.Header>
		<AppShell.Main
			className={classes.AppShellMain}
			visibleFrom="sm"
			style={{ preventOverflow: true }}
			//bg="linear-gradient(145deg, rgb(224, 82, 50) 1%, rgba(205, 50, 104, 0.95) 100%)"
			//bg="blue"
			>
				<MainCard/>
		</AppShell.Main>
		<AppShell.Navbar
			className={classes.AppShellNavbar}
			p="AppShellResponsiveSize"
			visibleFrom="sm"
			style={{ preventOverflow: true }}
			//style={{ width: rem(220), height: rem(944), preventOverflow: true }}
			// style={{ preventOverflow: true, justify: "center" }}
			//bg="transparent"
			>
		<NavbarCard/>
			</AppShell.Navbar>

			<AppShell.Footer
				//my="0"
				//p="AppShellResponsiveSize"
				visibleFrom="sm"
				//bg="transparent"
				bg="linear-gradient(145deg, rgb(224, 82, 50) 1%, rgba(205, 50, 104, 0.95) 100%)"
				//style={{ width: rem(1440), height: rem(48), preventOverflow: true,
				//justify: "center" }}
				style={{ preventOverflow: true }}
			>
			</AppShell.Footer>
    </AppShell>
  );
}

export default MantineAppShell;