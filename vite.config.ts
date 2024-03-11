// import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import checker from "vite-plugin-checker";
// import svgrPlugin from "vite-plugin-svgr";
// import envCompatible from "vite-plugin-env-compatible";
// import html from "vite-plugin-html";

// Vite handles environment variables in a different way than CRA
// To avoid complete refactoring and preserve backwards-compatibilty we can use a custom plugin.
// const ENV_PREFIX = "REACT_APP_";

// https://vitejs.dev/config/
export default defineConfig({
// export default defineConfig(({ mode }) => {
	plugins: [
		//checker({
		//	overlay: false,
		//	typescript: true,
		//}),
		react({
			//babel: {
			//	plugins: [
			//	],
			//}
		}),
		//svgrPlugin({
    //  svgrOptions: {
    //    icon: true,
    //    // ...svgr options (https://react-svgr.com/docs/options/)
    //  },
    //}),
		//envCompatible({
		//	prefix: ENV_PREFIX
		//}),
	],
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
		// FIXME: Verify that
		// port: 3000,
	},
	// FIXME: Verify that
	//build: {
  //  outDir: "build",
  //},
	// to access the Tauri environment variables set by the CLI with information about the current target
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
		target: process.env.TAURI_PLATFORM === "windows" ? "chrome105" : 	"safari13",
		// don't minify for debug builds
		// eslint-disable-next-line no-negated-condition, no-ternary
		minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
		// produce sourcemaps for debug builds
		sourcemap: !!process.env.TAURI_DEBUG,
	},
})
