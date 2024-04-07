import { Button, rem } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function AccountsButton() {
  return (
		<Button className={classes.AccountsButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconUserCircle style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Accounts</Button>
	);
}