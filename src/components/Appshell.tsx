import { AppShell } from '@mantine/core';

export function MantineAppShell() {
  return (
    <AppShell
      navbar={{ width: { sm: 200, lg: 300 }, breakpoint: 'sm' }}
    >
      <AppShell.Navbar>Navbar</AppShell.Navbar>
    </AppShell>
  )
}

export default MantineAppShell;