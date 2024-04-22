import AmplifyAdmin from "./admin";
// https://github.com/MrHertal/react-admin-amplify?tab=readme-ov-file#installation
import { Amplify } from "aws-amplify";
import { AmplifyAdmin, Resource } from "react-admin";
import awsExports from "./aws-exports";
// import { generateClient } from "aws-amplify/api";
// import { createTodo } from './graphql/mutations';
import * as mutations from "./graphql/mutation";
import * as queries from "./graphql/queries";

/* Added: 21042024 */
//import {
//    buildAuthProvider,
//    buildDataProvider,
//    CognitoGroupList,
//    CognitoUserList,
//    CognitoUserShow,
//} from "react-admin-amplify";
// import {
//    SomeComponent
//} from "./components


// import * as mutations from "./graphql/mutations"; NOTE: Later
// import * as queries from "./graphql/queries";

Amplify.configure( awsExports ); // Configure Amplify the usual way

function App() {
    return (
        <AmplifyAdmin // Replace the Admin component of react-admin
            operations={{ queries, mutations }} // Pass the queries and mutations
            options={{ authGroups: ["admin"] }} // Pass the options
        >
            <Resource name="orders" />
            {/* Set the resources as you would do within Admin component */}
        </AmplifyAdmin>
    );
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