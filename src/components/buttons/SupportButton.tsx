import { Button, rem } from '@mantine/core';
import { IconHelpOctagon } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function SupportButton() {
  return (
		<Button className={classes.SupportButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconHelpOctagon style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">Support</Button>
	);
}