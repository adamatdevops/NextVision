import { generateClient } from "aws-amplify/api";
import { createIncomesModel } from "../../../graphql/mutations";

const client = generateClient()

const newIncomesModel = await client.graphql({
    query: createIncomesModel,
    variables: {
        input: {

	}
    }
});