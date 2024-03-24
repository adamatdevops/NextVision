import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(680);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
	const FIRST_COL_WIDTH = rem(800)

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 12, md: 6, lg: 3, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid
					gutter="lg"
					grow
					justify="space-between"
					align="stretch"
					overflow="visible"
				>
          <Grid.Col
						span={6}
					>
            <Skeleton
						height={SECONDARY_COL_HEIGHT} radius="lg" animate={false}
						width={FIRST_COL_WIDTH}
						/>
          </Grid.Col>
          <Grid.Col
						span="content">
            <Skeleton
						height={SECONDARY_COL_HEIGHT} radius="lg" animate={false}
						width={FIRST_COL_WIDTH}
						/>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}