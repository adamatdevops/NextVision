import { Button, rem } from '@mantine/core';
import { IconDeviceDesktopAnalytics } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function LogsAndActivityButton() {
  return (
		<Button className={classes.LogsAndActivityButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconDeviceDesktopAnalytics style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Logs & Activity</Button>
	);
}