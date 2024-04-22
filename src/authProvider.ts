import { type AuthProvider, HttpError } from 'react-admin';
// import data from './users.json';

/**
 * This authProvider is only for test purposes. Don't use it in production.
 */
// Get the demo user avatar
AuthProvider.getIdentity = async () => {
    try {
        const userData = await API.graphql(
            graphqlOperation(queries.getUser, { id: "demo" })
        );

        const url = await Storage.get(userData.data.getUser.picture.key);

        return {
            id: "demo",
            fullName: "Demo",
            avatar: url,
        };
    } catch (e) {
        console.log(e);
    }
};

export default AuthProvider;

function graphqlOperation(getUser: any, arg1: { id: string; }): any {
    throw new Error("Function not implemented.");
}
