import { useState } from 'react';
import { AppShell, Button, Flex, rem, Stack, Space, Card, Box, Overlay, Container } from '@mantine/core';
import {
	// IconSwitchHorizontal,
	IconDashboard,
	IconAddressBook,
	IconShieldHalf,
	IconNotification,
	IconBellRinging,
	IconDeviceDesktopAnalytics,
	IconBrandWikipedia,
	IconHelpOctagon,
	IconRefresh,
	IconUserCircle,
	IconSettings
} from '@tabler/icons-react';
// import classes from "./Buttons.module.css";
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { LeadGrid } from './LeadGrid'
//import TransferMateLogo from "./src/assets/TransferMateLogov2.svg";

/* Standard */
// Padding is:
// - 10 when viewport width is < theme.breakpoints.sm
// - 15 when viewport width is >= theme.breakpoints.sm and < theme.breakpoints.lg
// - theme.spacing.xl when viewport width is >= theme.breakpoints.lg

export function MantineAppShell() {
	const [visible, setVisible] = useState(false);

  return (
		<Container
		bg="blue"
		>
    <AppShell
      header={{
				height: { base: 18, sm: 48, lg: 80 },
				offset: false
			}}
			footer={{ height: { base: 18, sm: 24, lg: 40 } }}
      navbar={{
        width: { sm: 120, lg: 240	},
        breakpoint: "sm",
      }}
			padding="md"
			withBorder={true}
			zIndex={100}
			bg="defaultGradient"
    >

		<AppShell.Header
		h="48"
		bg="defaultGradient"
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
			bg="transparent"
			// p="10"
			mt="sm"
			h="820"
			w="1000"
			visibleFrom="sm"
			style={{ width: rem(900), height: rem(20) }}
			>
			<Card shadow="md" padding="lg" radius="md" withBorder >
				<Overlay color="#2c83ca" backgroundOpacity={0.35} blur={3} radius="md" />
    	</Card>
		</AppShell.Main>
    <AppShell.Navbar
			h="800"
			bg="lightBlue"
			>
				<Flex
					mih={800}
					gap="sm"
					rowGap="10"
					columnGap="10"
					justify="flex-start"
					align="flex-start"
					direction="column"
					wrap="nowrap"
					px="md"
				>
					<Button visibleFrom="md" variant="gradient" radius="md" color="#F8F9FA" justify="left" fullWidth leftSection={<IconDashboard style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40" mt="md">Dashboard</Button>
      		<Button visibleFrom="md" variant="outline" radius="md" color="#F8F9FA" bg="#1864AB" justify="left" fullWidth leftSection={<IconAddressBook style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Profile</Button>
					<Button visibleFrom="md" variant="outline" radius="md" color="#F8F9FA" bg="#1864AB" justify="left" fullWidth leftSection={<IconShieldHalf style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Security</Button>
					<Button visibleFrom="md" variant="outline" radius="md" color="#1864AB" bg="#66D9E8" justify="left" fullWidth leftSection={<IconNotification style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Notifications</Button>
					<Button visibleFrom="md" variant="light" radius="md" color="#1864AB" bg="#66D9E8" justify="left" fullWidth leftSection={<IconBellRinging style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Alerts</Button>
					<Button visibleFrom="md" variant="outline" radius="md" color="#1864AB" bg="#66D9E8" justify="left" fullWidth leftSection={<IconDeviceDesktopAnalytics style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Logs & Activity</Button>
					<Button visibleFrom="md" variant="outline" radius="md" color="#495057" bg="#63E6BE" justify="left" fullWidth leftSection={<IconHelpOctagon style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Support</Button>
					<Button visibleFrom="md" variant="outline" radius="md" color="#495057" bg="#63E6BE" justify="left" fullWidth leftSection={<IconRefresh style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Updates</Button>
					<Button visibleFrom="md" variant="outline" radius="md" color="#495057" bg="#DEE2E6" justify="left" fullWidth leftSection={<IconBrandWikipedia style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">SurgiWiki</Button>
					<Space h="md" />
					<Button visibleFrom="md" variant="gradient" radius="md" color="#F8F9FA" justify="left" fullWidth leftSection={<IconUserCircle style={{ width: rem(40), height: rem(20)}}/>} p="10" size="md" h="40" mt="xl">Accounts</Button>
					<Button visibleFrom="md" variant="gradient" radius="md" color="#F8F9FA" justify="left" fullWidth leftSection={<IconSettings style={{ width: rem(40), height: rem(20)}}/>} p="10" size="md" h="40">Settings</Button>
			</Flex>
			</AppShell.Navbar>
    </AppShell>
		</Container>
  );
}

export default MantineAppShell;