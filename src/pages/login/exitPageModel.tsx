import { generateClient } from "aws-amplify/api";
import { createLandingPageModel } from './graphql/mutations';

const client = generateClient()

const newLandingPageModel = await client.graphql({
    query: createLandingPageModel,
    variables: {
        input: {
		"Description": "Lorem ipsum dolor sit amet",
		"Date": "1970-01-01Z",
		"Time": "12:30:23.999Z"
	}
    }
});