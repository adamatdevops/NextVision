import { AppShell, Button, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

export function MantineAppShell() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
	const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
	const icon = <IconPhoto size={14} />;

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
					<Button onClick={toggleDesktop} visibleFrom="sm" leftSection={icon}>
        		Toggle Home View
      		</Button>
      		<Button onClick={toggleMobile} hiddenFrom="sm" leftSection={icon}>
        		Toggle Home View
      		</Button>
				</Group>

      </AppShell.Header>

      <AppShell.Navbar p="0">
				<Flex
      		mih={800}
      		bg="rgba(5, 135, 235, 0.92)"
      		gap="lg"
      		justify="flex-start"
      		align="center"
      		direction="column"
      		wrap="wrap"
    		>

      	<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Dashboard</Button>
      	<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Settings</Button>
      	<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Accounts</Button>
				<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Security</Button>
				<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Notifications</Button>
				<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Alerts</Button>
				<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Logs & Activity</Button>
				<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">SurgiWiki</Button>
				<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Open Issues</Button>
				<Button onClick={toggleDesktop} visibleFrom="lg" variant="outline" color="rgba(250, 245, 245, 1)" leftSection={icon} p="sm">Updates</Button>
    	</Flex>
			</AppShell.Navbar>

      <AppShell.Main>
      </AppShell.Main>
    </AppShell>
  );
}

export default MantineAppShell;