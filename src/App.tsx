import "@mantine/core/styles.css";
import { MantineProvider, createTheme, rem } from "@mantine/core";
import "./index.css";
import "./App.css";
//import { theme } from "./mantineTheme";
import { MantineAppShell } from "./components/MantineAppShell";
// import { NavbarSimple } from "./components/NavbarSimple";

// import "./components/LeadGrid"
// import { LeadGrid } from "./components/LeadGrid";

// import { useDisclosure } from '@mantine/hooks';
// import { IconBadge, IconOlympics } from "@tabler/icons-react";
//import mantineMenu from "./components/mantineMenu";

// SEE https://bobbyhadz.com/blog/react-cannot-be-used-as-a-jsx-component
// To avoid "Component cannot be used as a JSX component in React" ERROR

const theme = createTheme({

	/** Used to retrieve/set color scheme value in external storage, by default
	 * uses `window.localStorage` */
	// FIXME: Add This
  // colorSchemeManager?: MantineColorSchemeManager;
	// FIXME: Add This
	/** Default color scheme value used when `colorSchemeManager` cannot retrieve value from external storage, `light` by default */

	focusRing:"always",
	scale: 1,
	fontSmoothing: true,
	white: "#e3e8ef",
	black: "#1a1e24",

	colors: {
		deepBlue: [
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

	shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },


	primaryColor: "blue",
	autoContrast: true,
	luminanceThreshold: 0.4,
	headings: {
		fontFamily:
			"Reddit Mono, Roboto, -apple-system, BlinkMacSystemFont, Noto Sans, Ubuntu, Droid Sans, Open Sans, Helvetica Neue, Apple Color Emoji, Segoe UI Emoji, sans-serif",

			textWrap: "wrap",
			sizes: {
				h1: { fontSize: rem(38) },
				h2: { fontSize: rem(32) },
				h3: { fontSize: rem(24) },
				h4: { fontSize: rem(20) },
				h5: { fontSize: rem(14) },
				h6: { fontSize: rem(8) },
			},
		},

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
		defaultGradient: {
			from: '#FF8787',
			to: '#1C7ED6',
			deg: 45,
		}
	}
);


function App() {

	return (
		<MantineProvider
		theme={theme} 
		>
			<MantineAppShell/>
		</MantineProvider>
	)
}

export default App;