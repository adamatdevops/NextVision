import { Button, rem } from '@mantine/core';
import { IconNotification } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function NotificationsButton() {
  return (
		<Button className={classes.NotificationsButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconNotification style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Notifications</Button>
	);
}