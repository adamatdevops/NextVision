import { Button, rem } from '@mantine/core';
import { IconAddressBook } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function ProfileButton() {
  return (
		<Button className={classes.ProfileButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconAddressBook style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Profile</Button>
	);
}