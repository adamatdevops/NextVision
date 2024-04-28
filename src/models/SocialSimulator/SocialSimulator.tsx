import { generateClient } from "aws-amplify/api";
import { createSocialSimulator } from "../../graphql/mutations";

const client = generateClient()

const newSocialSimulator = await client.graphql( {
    query: createSocialSimulator,
    variables: {
        input: {
            "MembershipData": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "SeniorityData": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "EducationData": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
            "MembershipRel": /* Provide a MembershipModel instance here */,
            "SeniorityRel": /* Provide a SeniorityModel instance here */,
            "EducationRel": /* Provide a EducationModel instance here */
	    }
    }
} );