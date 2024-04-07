import { Button, rem } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function SettingsButton() {
  return (
		<Button className={classes.SettingsButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconSettings style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Settings</Button>
	);
}