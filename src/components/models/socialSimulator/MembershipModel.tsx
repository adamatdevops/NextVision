import { generateClient } from "aws-amplify/api";
import { createMembershipModel } from "../../../graphql/mutations";

const client = generateClient()

const newMembershipModel = await client.graphql({
    query: createMembershipModel,
    variables: {
        input: {

	}
    }
});