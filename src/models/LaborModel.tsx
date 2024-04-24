import { generateClient } from "aws-amplify/api";
import { createLaborModel } from './graphql/mutations';

const client = generateClient()

const newLaborModel = await client.graphql({
    query: createLaborModel,
    variables: {
        input: {
		"IsWorking": true,
		"IsEmployedInTheKibutz": true,
		"Hybrid": true,
		"MonthlyIncome": "Lorem ipsum dolor sit amet",
		"MonthlyExpanditure": "Lorem ipsum dolor sit amet"
	}
    }
});