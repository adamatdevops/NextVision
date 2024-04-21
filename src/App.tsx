import MyAdmin from "./admin";
// https://github.com/MrHertal/react-admin-amplify?tab=readme-ov-file#installation
import { Amplify } from "aws-amplify";
import { Resource } from "react-admin";
import { AmplifyAdmin } from "react-admin-amplify";
import awsExports from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";

Amplify.configure(awsExports); // Configure Amplify the usual way

function App() {
	return <MyAdmin />;
}

export default App;

// import { Admin, Resource } from "react-admin";
// import { dataProvider } from './dataProvider';
// import { UserList } from "./users";

// export const App = () => (
//   <Admin dataProvider={dataProvider}>
// 		<Resource name="users" list={UserList} />
//   </Admin>
// );