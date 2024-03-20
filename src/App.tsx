import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import "./App.css";
// import theme from "./mantineTheme";
// import ColorSchemeToggle from "./components/ColorSchemeToggle";
import { MantineAppShell } from "./components/MantineAppShell";
// import { NavbarSimple } from "./components/NavbarSimple";
import theme from "./mantineTheme"


// import "./components/LeadGrid"
// import { LeadGrid } from "./components/LeadGrid";

// import { useDisclosure } from '@mantine/hooks';
// import { IconBadge, IconOlympics } from "@tabler/icons-react";
//import mantineMenu from "./components/mantineMenu";



// SEE https://bobbyhadz.com/blog/react-cannot-be-used-as-a-jsx-component
// To avoid "Component cannot be used as a JSX component in React" ERROR
function App() {

	return (
		<>
			<div>
				<MantineProvider
				theme={theme}
				>
					<MantineAppShell />
				</MantineProvider>
			</div>
		</>
	)
}

export default App;