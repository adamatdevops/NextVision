import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import config from './amplifyconfiguration.json';
import { createSeniorityModel } from './graphql/mutations';
Amplify.configure(config);

const client = generateClient()

import { generateClient } from "aws-amplify/api";
import { createSeniorityModel } from './graphql/mutations';

const client = generateClient()