import { generateClient } from "aws-amplify/api";
import { createOutcomesModel } from "../../../graphql/mutations";

const client = generateClient()

const newOutcomesModel = await client.graphql({
    query: createOutcomesModel,
    variables: {
        input: {

	}
    }
});