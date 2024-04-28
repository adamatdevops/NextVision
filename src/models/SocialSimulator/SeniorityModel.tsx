import { generateClient } from "aws-amplify/api";
import { createSeniorityModel } from "../../graphql/mutations";

const client = generateClient()

const newSeniorityModel = await client.graphql({
    query: createSeniorityModel,
    variables: {
        input: {

	}
    }
});