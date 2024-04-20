import { resolve } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import checker from "vite-plugin-checker"
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths';
// import envCompatible from "vite-plugin-env-compatible";
// import html from "vite-plugin-html";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		reactRefresh({		//	exclude: [resolve(__dirname, "node_modules/**/*")],
			include: [resolve(__dirname, "src/**/*.tsx")]
		})
		//tsconfigPaths(),
		//checker({
    //      overlay: false,
    //      typescript: true,
    //}),
	],
	define: {
			'process.env': process.env,
	},
	server: {
			host: true,
	},
	// envPrefix: [],
	base: './',
	optimizeDeps: { exclude: ["fsevents"] }
	// build: {
	// 	// generate .vite/manifest.json in outDir
	// 	manifest: true,
	// 	// Tauri uses Chromium on Windows and WebKit on macOS and Linux
	// 	// eslint-disable-next-line no-ternary
	// 	target: process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "safari13",
	// 	// don't minify for debug builds
	// 	// eslint-disable-next-line no-negated-condition, no-ternary
	// 	minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
	// 	// produce sourcemaps for debug builds
	// 	sourcemap: !!process.env.TAURI_DEBUG,
	// },
});
