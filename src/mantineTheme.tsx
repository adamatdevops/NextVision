/* Mantine Core */
import {createTheme, rem} from "@mantine/core";
/* Mantine Core - AppShell */
/* Layout */
// import { AppShell, AspectRatio, Container, Flex, Grid, Group, SimpleGrid, Space, Stack } from '@mantine/core';
/* Layout */
// import { Checkbox, Chip, Fieldset, FileInput, Input, NativeSelect, NumberInput, PasswordInput, Rating, Switch, TextInput } from "@mantine/core";
/* Inputs */
// import { ActionIcon, Button, CloseButton, FileButton } from "@mantine/core";
/* Buttons */
// import { Anchor, Burger, NavLink, Pagination, Stepper, Tabs } from "@mantine/core";
/* Navigation */
// import { Alert, Loader, Notification, Progress, Skeleton } from "@mantine/core";
/* Feedback */
// import { Drawer, HoverCard, Menu, Popover, Tooltip } from "@mantine/core";
/* Data Display */
// import { Avatar, Badge, Card, ThemeIcon, Timeline } from "@mantine/core";
/* Typography */
// import { Blockquote, Highlight, List, Table, Text, Title } from "@mantine/core";
/* Misc */
// import { Collapse, Divider, Paper, Portal, Transition } from "@mantine/core";
// import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantinex/mantine-logo';

const mantineTheme = createTheme({
	/** Put your config */
	focusRing: "always",
	scale: 1,
	fontSmoothing: true,
	//Black value from Blueprint. We could change this.
	// Without it things look a little darker than before.
	white: "#e3e8ef",
	black: "#111418",
	// FIXME: Add colors
	/** Object of colors, key is color name, value is an array of at least 10
	 * strings (colors) */
	colors: {
		"deepBlue": [
			"#b3d1ff",
			"#99c2ff",
			"#66a3ff",
			"#3385ff",
			"#0066ff",
			"#005ce6",
			"#0052cc",
			"#0047b3",
			"#003d99",
			"#003380",
		],
		"ocean-blue": [
			"#7AD1DD",
			"#5FCCDB",
			"#44CADC",
			"#2AC9DE",
			"#1AC2D9",
			"#11B7CD",
			"#09ADC3",
			"#0E99AC",
			"#128797",
			"#147885",
		],
		"bright-pink": [
			"#F0BBDD",
			"#ED9BCF",
			"#EC7CC3",
			"#ED5DB8",
			"#F13EAF",
			"#F71FA7",
			"#FF00A1",
			"#E00890",
			"#C50E82",
			"#AD1374",
		],
	},
	primaryShade: {
		light: 6,
		dark: 7,
	},
	/** Key of `theme.colors`, hex/rgb/hsl values are not supported.
	 *  Determines which color will be used in all components by default.
	 *  Default value – `blue`.
	 * */
	primaryColor: "deep-blue",
	//variantColorResolver:
	autoContrast: true,
	luminanceThreshold: 0.4,
	fontFamily:
		"Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Open Sans, Helvetica Neue, Apple Color Emoji, Segoe UI Emoji, sans-serif",
	// headings: {
	// fontFamily: string;
	// fontWeight: string;
	// textWrap: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
	// sizes: {
	// h1: HeadingStyle;
	// h2: HeadingStyle;
	// h3: HeadingStyle;
	// h4: HeadingStyle;
	// h5: HeadingStyle;
	// h6: HeadingStyle;
	// },
	// },
	spacing: {
		one: rem(1),
		two: rem(2),
		xxs: rem(4),
		xs: rem(8),
		sm: rem(12),
		md: rem(16),
		lg: rem(20),
		xl: rem(24),
		xxl: rem(32),
		"3xl": rem(40),
		"4xl": rem(48),
		"5xl": rem(64),
		"6xl": rem(80),
		"7xl": rem(96),
		"8xl": rem(128),
		"9xl": rem(160),
	},
	// fontSizes: MantineFontSizesValues // MantineFontSizesValues
	lineHeights: {
		xs2: "1.25",
		xs1: "1.3",
		xs: "1.4",
		sm: "1.45",
		sm1: "1.50",
		md: "1.55",
		lg: "1.6",
		xl: "1.65",
		xxl: "1.75",
	},
	defaultRadius: "md",
	cursorType: "pointer",
});

export default mantineTheme;
