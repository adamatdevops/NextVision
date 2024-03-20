import { AppShell, Button, Flex, Group, rem, Stack, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
	IconPhoto,
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
import classes from "./Buttons.module.css";

export function MantineAppShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: { base: 28, sm: 40, lg: 68 } }}
			footer={{ height: 60 }}
      navbar={{
        width: { sm: 120, lg: 300	},
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
			<AppShell.Header>
				<Group h="100%" px="md">
					<Button onClick={toggleDesktop} visibleFrom="sm" leftSection={<IconPhoto size={14} />}>
        		Toggle Home View
      		</Button>
      		<Button onClick={toggleMobile} hiddenFrom="sm" leftSection={<IconPhoto size={14} />}>
        		Toggle Home View
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
    		>
					<Stack
						h={640}
						//bg="#ffffff"
						align="flex-start"
						justify="space-around"
						gap="sm"
					>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconDashboard style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40" mt="md">Dashboard</Button>
      			<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconAddressBook style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Profile</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconShieldHalf style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Security</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconNotification style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Notifications</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconBellRinging style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Alerts</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconDeviceDesktopAnalytics style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Logs & Activity</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconBrandWikipedia style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">SurgiWiki</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconHelpOctagon style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Support</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconRefresh style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Updates</Button>
						<Space h="md" />
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconUserCircle style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40" mt="xl">Accounts</Button>
						<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={<IconSettings style={{ width: rem(40), height: rem(20) }}/>} p="10" size="md" h="40">Settings</Button>
					</Stack>
    	</Flex>

			</AppShell.Navbar>

      <AppShell.Main>
      </AppShell.Main>
    </AppShell>
  );
}

export default MantineAppShell;