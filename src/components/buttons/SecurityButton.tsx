import { Button, rem } from '@mantine/core';
import { IconShieldHalf } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function SecurityButton() {
  return (
		<Button className={classes.SecurityButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconShieldHalf style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Security</Button>
	);
}