import React from 'react';
import { AppShell, Navbar, Header, MediaQuery, Burger, ActionIcon, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// TODO: Check whats the best icons for the dashboard
// import { MantineLogo } from '@mantinex/mantine-logo';
import logo from './logo.svg';
import './App.css';

import { SunIcon } from '@modulz/radix-icons';
import { MantineProvider, Text } from '@mantine/core';
import { createStyles, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

import { MemoryRouter, NavLink, Route, Routes } from 'react-router-dom';

import { invoke } from '@tauri-apps/api/tauri';

import Home from './Home'
import Settings from './Settings';

export function App() {
	const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
	);
}

// export default App;
