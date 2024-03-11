import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import AppShell from "./components/mantineAppShell";
// import theme from "./mantineTheme";
import DoubleNavbar from "./components/DoubleNavbar";

// SEE https://bobbyhadz.com/blog/react-cannot-be-used-as-a-jsx-component
// To avoid "Component cannot be used as a JSX component in React" ERROR
export default function App() {
	return (
		<MantineProvider>
		</MantineProvider>
	)
}




