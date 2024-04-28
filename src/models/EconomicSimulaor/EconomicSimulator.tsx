import { generateClient } from "aws-amplify/api";
import { createEconomicSimulator } from "../../graphql/mutations";

const client = generateClient()

const newEconomicSimulator = await client.graphql({
    query: createEconomicSimulator,
    variables: {
        input: {
		"IncomesData": "Lorem ipsum dolor sit amet",
		"OutcomesData": "Lorem ipsum dolor sit amet",
		"IncomesRel": /* Provide a IncomesModel instance here */,
		"OutcomesRel": /* Provide a OutcomesModel instance here */
	}
    }
});