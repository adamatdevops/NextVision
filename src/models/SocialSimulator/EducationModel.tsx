import { generateClient } from "aws-amplify/api";
import { createEducationModel } from "../../graphql/mutations";

const client = generateClient()

const newEducationModel = await client.graphql({
    query: createEducationModel,
    variables: {
        input: {

	}
    }
});