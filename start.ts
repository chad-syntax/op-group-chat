import { AgentsmithClient } from '@agentsmith-app/sdk';

const apiKey = process.env.AGENTSMITH_API_KEY!;
const projectId = process.env.AGENTSMITH_PROJECT_ID!;

const client = new AgentsmithClient(apiKey, projectId);

//
