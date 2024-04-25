import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from './amplifyconfiguration.json';
import { createIncomeModel } from './graphql/mutations';
Amplify.configure(config);

const client = generateClient()

const newIncomeModel = await client.graphql({
    query: createIncomeModel,
    variables: {
        input: {
		"First_Name": "Lorem ipsum dolor sit amet",
		"Last_Name": "Lorem ipsum dolor sit amet",
		"Email": "test12346789@testemailtestemail.com",
		"Status": "Lorem ipsum dolor sit amet",
		"Age": 1020,
		"DateOfBirth": "1970-01-01Z"
	}
    }
});