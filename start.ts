import { AgentsmithClient } from '@agentsmith-app/sdk';

const apiKey = process.env.AGENTSMITH_API_KEY!;
const projectId = process.env.AGENTSMITH_PROJECT_ID!;

const client = new AgentsmithClient(apiKey, projectId);

type ThreadMessage = {
  name: string;
  message: string;
};

const thread: ThreadMessage[] = [];

const luffy = await client.getPrompt('luffy');

const result = await luffy.execute({
  thread,
} as any); // TODO: fix this

console.log(result);

await client.shutdown();

// testing
