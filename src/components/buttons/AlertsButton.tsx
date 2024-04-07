import { Button, rem } from '@mantine/core';
import { IconBellRinging } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function AlertsButton() {
  return (
		<Button className={classes.AlertsButton} visibleFrom="sm" variant="filled" radius="md" justify="center" leftSection={<IconBellRinging style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Alerts</Button>
	);
}