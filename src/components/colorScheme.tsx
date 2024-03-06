import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import cx from 'clsx';
import classes from './colorScheme.module.css';

function colorSchemeComponent() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <><ActionIcon
			onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
			variant="default"
			size="xl"
			aria-label="Toggle color scheme" /><FaRegSun className={cx(classes.icon, classes.light)} stroke={1.5} /><FaRegMoon className={cx(classes.icon, classes.dark)} stroke={1.5} /></>
    </ActionIcon>
  );
}

export default colorSchemeComponent;