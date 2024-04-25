import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from './amplifyconfiguration.json';
import { createLaborModel } from './graphql/mutations';
Amplify.configure(config);

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