import { generateClient } from "aws-amplify/api";
import { createMemberStatusModel } from './graphql/mutations';

const client = generateClient()

const newMemberStatusModel = await client.graphql({
    query: createMemberStatusModel,
    variables: {
        input: {
		"Seniority": 1020,
		"Father": true,
		"Mother": true,
		"FamilyMember01": true,
		"FamilyMember02": true,
		"FamilyMember03": true,
		"FamilyMember04": true,
		"FamilyMember05": true,
		"FamilyMember06": true,
		"FamilyMember07": true,
		"FamilyMember08": true
	}
    }
});