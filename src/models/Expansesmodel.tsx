import { generateClient } from "aws-amplify/api";
import { createExpansensModel } from './graphql/mutations';

const client = generateClient()

const newExpansensModel = await client.graphql({
    query: createExpansensModel,
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