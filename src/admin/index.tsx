import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";  wont be used
import { ralayout } from "./layout";
// import { Admin } from "react-admin-amplify"; Dup

const AmplifyAdmin = () => (
    <Admin dataProvider={dataProvider} layout={ralayout}>
        <Resource name="posts" list={ListGuesser} />
        <Resource name="comments" list={ListGuesser} />
    </Admin>
);

export default AmplifyAdmin;