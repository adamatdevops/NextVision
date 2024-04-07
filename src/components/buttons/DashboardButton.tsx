import { Button, rem } from '@mantine/core';
import { IconDashboard } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function DashboardButton() {
  return (
		<Button className={classes.DashboardButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconDashboard style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Dashboard</Button>
	);
}