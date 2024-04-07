import { Button, rem } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function UpdatesButton() {
  return (
		<Button className={classes.UpdateButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconRefresh style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" h="40" w="200">Updates</Button>
	);
}