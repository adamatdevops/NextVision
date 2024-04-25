import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from './amplifyconfiguration.json';
import { createEducationClassesModel } from './graphql/mutations';
Amplify.configure(config);

const client = generateClient()

const newEducationClassesModel = await client.graphql({
    query: createEducationClassesModel,
    variables: {
        input: {
		"ActualCost": 1020,
		"MemberDerivedCost": 1020,
		"ComnmunityDerivedCost": 1020
	}
    }
});