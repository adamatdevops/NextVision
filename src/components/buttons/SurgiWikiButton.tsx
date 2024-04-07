import { Button, rem } from '@mantine/core';
import { IconBrandWikipedia } from '@tabler/icons-react';
import classes from './Buttons.module.css';

export function SurgiWikiButton() {
  return (
		<Button className={classes.SurgiWikiButton} visibleFrom="md" variant="filled" radius="md" justify="center" leftSection={<IconBrandWikipedia style={{ width: rem(30), height: rem(20)}}/>} p="10" size="md" w="200">SurgiWiki</Button>
	);
}