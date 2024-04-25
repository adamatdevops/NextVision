import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from './amplifyconfiguration.json';
import { createPenssionModel } from './graphql/mutations';
Amplify.configure(config);

const client = generateClient()

const newPenssionModel = await client.graphql({
    query: createPenssionModel,
    variables: {
        input: {
		"NumOfPenssionPlansum": 1020,
		"MonthlyPayment": 1020,
		"YearllyExpanse": 1020,
		"MothlyDividend": 1020,
		"YearlyDividend": 1020
	}
    }
});