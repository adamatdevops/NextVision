/* Mantine Core */
import { createTheme, rem } from "@mantine/core";

const theme = createTheme({
	focusRing: "always",
	scale: 1,
	fontSmoothing: true,
	white: "#e3e8ef",
	black: "#111418",

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

	// primaryColor: "green",
	// variantColorResolver:
	autoContrast: true,
	luminanceThreshold: 0.4,
	headings: {
		fontFamily:
			"Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Open Sans, Helvetica Neue, Apple Color Emoji, Segoe UI Emoji, sans-serif",

			textWrap: "wrap",
			sizes: {
				h1: { fontSize: rem(36) },
				h2: { fontSize: rem(30) },
				h3: { fontSize: rem(24) },
				h4: { fontSize: rem(18) },
				h5: { fontSize: rem(12) },
				h6: { fontSize: rem(6) },
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
		defaultRadius: "sm",
		cursorType: "pointer",
	}
);

export default theme;