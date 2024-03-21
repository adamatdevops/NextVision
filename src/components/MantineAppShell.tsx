import { AppShell, Button, Flex, Group, rem, Stack, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
	IconSwitchHorizontal,
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

export function MantineAppShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: { base: 28, sm: 40, lg: 80 } }}
			footer={{ height: { base: 28, sm: 40, lg: 80 } }}
      navbar={{
        width: { sm: 120, lg: 220	},
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="ms"
    >
			<AppShell.Header>
				<Group h="90%" px="lg">
					<HeaderMegaMenu></HeaderMegaMenu>
					<Button onClick={toggleDesktop} visibleFrom="md" variant="outline" color="#d618c6" justify="space-between" leftSection={<IconSwitchHorizontal style={{ width: rem(30), height: rem(20) }}/>} size="md" h="40">
						Toggle Home
					</Button>
					<Button onClick={toggleMobile} hiddenFrom="md" variant="outline" color="#d618c6" justify="space-between" leftSection={<IconSwitchHorizontal style={{ width: rem(30), height: rem(20) }}/>} size="md" h="40">
						Toggle Home
					</Button>
				</Group>
      </AppShell.Header>

      <AppShell.Navbar>
				<Flex
      		mih={800}
      		bg="rgba(59, 129, 227, 0.92)"
      		gap="sm"
					rowGap="10"
      		justify="flex-start"
      		align="center"
      		direction="column"
      		wrap="wrap"
					h="100%"
					px="md"
    		>
					<Stack
						h={640}
						align="flex-start"
						justify="space-around"
						gap="sm"
					>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconDashboard style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40" mt="md">Dashboard</Button>
      			<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconAddressBook style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Profile</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconShieldHalf style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Security</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconNotification style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Notifications</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconBellRinging style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Alerts</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconDeviceDesktopAnalytics style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Logs & Activity</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconBrandWikipedia style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">SurgiWiki</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconHelpOctagon style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Support</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconRefresh style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40">Updates</Button>
						<Space h="md" />
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconUserCircle style={{ width: rem(40), height: rem(20)}}/>} p="10" size="md" h="40" mt="xl">Accounts</Button>
						<Button visibleFrom="md" variant="outline" color="rgba(250, 245, 245, 1)" justify="left" fullWidth leftSection={<IconSettings style={{ width: rem(40), height: rem(20)}}/>} p="10" size="md" h="40">Settings</Button>
					</Stack>
			</Flex>

			</AppShell.Navbar>

      <AppShell.Main>
      </AppShell.Main>
    </AppShell>
  );
}

export default MantineAppShell;