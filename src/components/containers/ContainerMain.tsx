import { Container } from '@mantine/core';

export function ContainerMain() {

  return (
    <>
      <Container
				fluid
				h={900}
				w={1600}
				mt="sm"
				
				//size="responsive"
				bg="var(--mantine-color-blue-light)"
				>
					container
      </Container>
    </>
  );
}