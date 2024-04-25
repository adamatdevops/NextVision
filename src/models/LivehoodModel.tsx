import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from './amplifyconfiguration.json';
import { createLiveHoodModel } from './graphql/mutations';
Amplify.configure(config);

const client = generateClient()

const newLiveHoodModel = await client.graphql({
    query: createLiveHoodModel,
    variables: {
        input: {
		"Laundry": "Lorem ipsum dolor sit amet",
		"Cables": "Lorem ipsum dolor sit amet",
		"Food": "Lorem ipsum dolor sit amet",
		"CommunityServices": "Lorem ipsum dolor sit amet",
		"Health": "Lorem ipsum dolor sit amet",
		"Groceries": "Lorem ipsum dolor sit amet"
	}
    }
});