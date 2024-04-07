import { Card, Flex, Overlay } from '@mantine/core';
// import type { OverlayProps, ElementProps } from '@mantine/core';
import classes from './MainCard.module.css';

export function MainCard() {
  return (
		<Card
		className={classes.MainCard}
		shadow="lg"
		padding="xl"
		radius="md"
		withBorder
		//w={1480}
		//h={880}
		>
			<Flex
				//mih={800}
				//gap="sm"
				//rowGap="10"
				//columnGap="10"
				//justify="center"
				//align="center"
				//direction="column"
				//wrap="wrap"
				//px="600"
				//h={800}
				//w={800}
				//ml={0}
				>
				{/* <Overlay
					//color="#ca762c"
					gradient="linear-gradient(145deg, rgba(226, 117, 117, 0.95) 0%, rgba(0, 0, 0, 0) 100%)"
					backgroundOpacity={0.35}
					blur={11}
					radius="md"
					>
				</Overlay> */}
			</Flex>
		</Card>
  );
}