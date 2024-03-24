/// <reference types="vite-plugin-svgr/client" />
// import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
// import envCompatible from "vite-plugin-env-compatible";
// import html from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		//checker({
    //      overlay: false,
    //      typescript: true,
    //}),
		react({}),
		svgr({
			// svgr options (https://react-svgr.com/docs/options/)
			svgrOptions: {
				plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
    	//    icon: true,
			},
    	//}),
			include: "**/*.svg?react",
			//envCompatible({
			//      prefix: ENV_PREFIX
    }),
	],
	// FIXME: Verify that
	//resolve: {
  //  alias: {
  //    "~": path.resolve(__dirname, "src"),
  //  },
  //},
	// prevent vite from obscuring rust errors
	clearScreen: false,
	// Tauri expects a fixed port, fail if that port is not available
  server: {
		strictPort: true,
    port: 5173,
  },
	// FIXME: Verify that
  //build: {
  //  outDir: "build",
  //},
	envPrefix: [
		"VITE_",
		"TAURI_PLATFORM",
		"TAURI_ARCH",
		"TAURI_FAMILY",
		"TAURI_PLATFORM_VERSION",
		"TAURI_PLATFORM_TYPE",
		"TAURI_DEBUG",
	],
	optimizeDeps: { exclude: ["fsevents"] },
	build: {
		// Tauri uses Chromium on Windows and WebKit on macOS and Linux
		// eslint-disable-next-line no-ternary
		target: process.env.TAURI_PLATFORM === "windows" ? "chrome105" : "safari13",
		// don't minify for debug builds
		// eslint-disable-next-line no-negated-condition, no-ternary
		minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
		// produce sourcemaps for debug builds
		sourcemap: !!process.env.TAURI_DEBUG,
	},
})
